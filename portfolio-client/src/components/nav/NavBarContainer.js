import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NavBar from './NavBar'

class NavBarContainer extends Component {
  render(){
    const { admin } = this.props 

    return (
      <>
        <nav>
          <NavBar admin={admin} />
        </nav>
      </>
    )
  }

  static propTypes = {
    admin: PropTypes.object.isRequired
  }
}

export default NavBarContainer