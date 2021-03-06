import React from 'react'
import { connect } from 'react-redux'
import { getUserInfo } from '../store/user'
import { Redirect } from 'react-router-dom'
function User(props) {
  return <Redirect to="/about">

  </Redirect>
  //   <div>
  //   <h1>{props.userinfo.name}</h1>
  // </div>
}
User.loadData = (store) => {
  return store.dispatch(getUserInfo())
}
export default connect(
  // state => ({ list: state.index.list }), { getUserInfo }
  state => (
    { userinfo: state.user.userinfo }
  )
)(User)