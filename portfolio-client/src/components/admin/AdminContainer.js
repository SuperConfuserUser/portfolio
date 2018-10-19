import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import AdminDashboard from './AdminDashboard'

const PrivateRoute = ({ component: Component, admin: admin, ...rest }) => (
  <Route {...rest} render={(props) => (
    admin.auth ?
    <Component {...props} /> :
    <Redirect to='/login' />
  )} />
)
 
class AdminContainer extends Component {
  render() {
    const { match, admin } = this.props

    return (
      <div>
        <PrivateRoute exact path={match.path} component={AdminDashboard} admin={admin} />
      </div>
    )
  }
}

const mapStateToProps = ({ admin }) => ({ admin })

export default connect(mapStateToProps)(AdminContainer)
