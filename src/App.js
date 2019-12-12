import React, { useState } from 'react'
import {Route} from 'react-router-dom'
import Index from './contanier/Index'
import About from './contanier/About'



export default (
  <div>
    <Route path="/" exact component={Index}></Route>
    <Route path="/about" exact component={About}></Route>
  </div>
)