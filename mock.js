const express = require('express')

const app = express()

app.get('/api/course/list', (req, res) => {
  // res.header('Access-Control-Allow-Origin', '*')
  // res.header('Access-Control-Allow-Methods', 'GET')
  // res.header('Content-Type', 'application/json;charset=utf-8')
  res.json({
    code: 0,
    list: [
      { name: '111', id: 1 },
      { name: '222', id: 2 },
      { name: '333', id: 3 }
    ]
  })
})

app.get('/api/user/info', (req, res) => {
  console.log(req.url)
  // res.header('Access-Control-Allow-Origin', '*')
  // res.header('Access-Control-Allow-Methods', 'GET')
  // res.header('Content-Type', 'application/json;charset=utf-8')
  res.json({
    code: 0,
    data: { name: 'test', id: 1 }
  })
})

app.get('/api/*', (req, res) => {
  res.json({ code: 0, data: `${req.url} error` })
})

app.listen(9090, () => {
  console.log('mock')
})