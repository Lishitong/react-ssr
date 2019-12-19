import React from 'react'
import {Route} from 'react-router-dom'
import Index from './contanier/Index'
import About from './contanier/About'
import User from './contanier/User'
import './App.css'

export default [
  {
    path:'/',
    component: Index,
    // exact:true,
    key:'index'
  },
  {
    path:'/about',
    component: About,
    exact:true,
    key:'about'
  },
  {
    path:'/user',
    component: User,
    exact:true,
    key:'user'
  }
]

