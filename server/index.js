import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, matchPath, Route } from 'react-router-dom'
import express from 'express'
import routes from '../src/App'
import { Provider } from 'react-redux'
import {getServerStore} from '../src/store/store'
import Header from '../src/component/Header'
import proxy from 'http-proxy-middleware'

const store = getServerStore()
const app = express()

app.use(express.static('public'))
app.use(
  '/api',
  proxy({ target: 'http://localhost:9090', changeOrigin: true })
)
app.get('*', (req, res) => {
  
  const promises = [];
  routes.some(route => {
    const match = matchPath(req.path, route);
    if (match) {
      const {loadData} = route.component
      if(loadData){
        promises.push(loadData(store))
      }
    }
  });

  Promise.all(promises).then(() => {
    const content = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url}>
          <Header></Header>
          {routes.map(route=><Route {...route}></Route>)}
        </StaticRouter>
      </Provider>
    )
    res.send(`
    <html>
      <head>
        <meta charset="utf-8"/>
        <title>test</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script >window.__context=${JSON.stringify(store.getState())}</script>
        <script src="./bundle.js"></script>
      </body>
    </html>
  `)
  })

})

app.listen(9093, () => {
  console.log('启动')
})