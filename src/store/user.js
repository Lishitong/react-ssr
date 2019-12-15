import axios from '../axios'

const GET_USERINFO = 'INDEX/GET_USERINFO'
const changeUserinfo = data => ({
  type: GET_USERINFO,
  data
})

export const getUserInfo = server => {
  return (dispatch, getState, axiosInstance) => {
    return axios.get('/api/user/info')
    .then(res=>{
      const {data} = res.data
      dispatch(changeUserinfo(data))
    })
  }
}

const defaultState = {
  userinfo: {}
}

export default (state=defaultState,action)=>{
  switch(action.type){
    case GET_USERINFO:
      const newState = {
        ...state,
        userinfo:action.data
      }
      return newState
    default:
      return state
  }
}