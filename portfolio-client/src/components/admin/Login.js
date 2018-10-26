import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../../actions/adminActions'

class Login extends Component {
  
  handleLogin = () => {
    const { login } = this.props
    login()
  }

  render() {
    const { auth } = this.props.admin

    if(auth) {
      return <Redirect to='/admin' />
    }
    
    return (
      <div>
        <button onClick={this.handleLogin}>Log in</button>
      </div>
    )
  }
}

export default connect(null, { login })(Login)
