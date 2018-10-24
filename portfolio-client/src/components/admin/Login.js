import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { authorizeAdmin } from '../../actions/adminActions'

class Login extends Component {
  
  handleLogin = () => {
    const { authorizeAdmin } = this.props
    authorizeAdmin()
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

const mapStateToProps = ({ admin }) => ({ admin })

export default connect(mapStateToProps, { authorizeAdmin })(Login)
