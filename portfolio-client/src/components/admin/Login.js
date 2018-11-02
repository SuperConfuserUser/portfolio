import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { login, logoutAdmin as resetAdmin } from '../../actions/adminActions'
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
    const { id, value } = event.target
    
    this.setState({
      [id]: value
    })
  }

  handleLogin = event => {
    const { login } = this.props

    event.preventDefault()
    login(this.state)
  }

  componentWillUnmount() {
    const { admin, resetAdmin } = this.props

    if(!admin.auth) {
      resetAdmin()
    }
  }

  render() {
    const { auth, loginError } = this.props.admin
    const { user, password } = this.state

    if(auth) {
      return <Redirect to='/admin' />
    }
    
    return (
      <div className='login'>
        <h2>Shhhhh
          <span>What's the secret handshake?</span>
        </h2>

        <form onSubmit={this.handleLogin} className='login-form'>
          <div>
            <input
              type='text' 
              id='user'
              onChange={this.handleChange}
              value={user}
            />
            <label htmlFor='user'>Username or Email</label>
          </div>

          <div>
            <input
              type='password' 
              id='password'
              onChange={this.handleChange}
              value={password}
            />
            <label htmlFor='password'>Password</label>
          </div>
          
          <button type='submit'>Login</button>

          {loginError && <ErrorMessage message='Oh, dear...' />}

        </form>
      </div>
    )
  }

  static propTypes = {
    admin: PropTypes.object.isRequired
  }
}

export default connect(null, { login, resetAdmin })(Login)