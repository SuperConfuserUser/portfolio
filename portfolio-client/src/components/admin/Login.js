import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import ErrorMessage from './ErrorMessage'

class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      user: '',
      password: ''
    }
  }

  handleChange = event => {
    const { name, value } = event.target
    
    this.setState({
      [name]: value
    })
  }

  handleLogin = event => {
    const { login } = this.props

    event.preventDefault()
    login(this.state)
  }

  // resets admin errors 
  componentWillUnmount() {
    const { admin, logoutAdmin } = this.props

    if(!admin.auth) {
      logoutAdmin()
    }
  }

  render() {
    const { auth, loginError } = this.props.admin
    const { user, password } = this.state

    if(auth) {
      return <Redirect to='/admin' />
    }
    
    return (
      <div>
        <form onSubmit={this.handleLogin}>
          <div>
            <label htmlFor="user">Username or Email</label>
            <input 
              type="text" 
              name="user"
              onChange={this.handleChange}
              value={user}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              name="password"
              onChange={this.handleChange}
              value={password}
            />
          </div>
        {loginError && <ErrorMessage message='Oh, dear...' />}
        
        </form>
    )
  }
}

export default connect(null, { login, logoutAdmin })(Login)
