import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NavBar from './NavBar'
import M from 'materialize-css/dist/js/materialize.min.js'

class NavBarContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sideNav: {}
    }
  }

  componentDidMount() {
    const elem = document.querySelector(".sidenav")
    const instance = M.Sidenav.init(elem, {
        edge: "left",
        inDuration: 250
    })
    this.setState({sideNav: instance})
  }

  componentWillUnmount() {
    this.state.sideNav.destroy()
  }

  render(){
    const { admin } = this.props

    return (
      <>
        <nav className='fullnav-container'>
          <NavBar admin={admin} klass='fullnav' />
          <i className='material-icons sidenav-trigger' data-target='slide-out'>menu</i>
        </nav>

        <nav className='sidenav-container'>
          <NavBar admin={admin} klass='sidenav sidenav-close' id='slide-out' />
        </nav>
      </>
    )
  }

  static propTypes = {
    admin: PropTypes.object.isRequired
  }
}

export default NavBarContainer