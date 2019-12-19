import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import indexReducer from './index'
import userReducer from './user'
import axios from 'axios'


const axiosServer = axios.create({
  baseURL:'/'
})
const axiosClient = axios.create({
  baseURL:'http://localhost:9093'
})
const reducer = combineReducers({
  index: indexReducer,
  user: userReducer
})

export const getClientStore = () => {
  const defaultState = window.__context ? window.__context : {}
  return createStore(reducer, defaultState, applyMiddleware(thunk.withExtraArgument(axiosClient)))
}

export const getServerStore = () => {
  return createStore(reducer, applyMiddleware(thunk.withExtraArgument(axiosServer)))
}