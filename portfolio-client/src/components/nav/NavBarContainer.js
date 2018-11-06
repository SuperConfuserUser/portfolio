import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NavBar from './NavBar'
import { Sidenav } from 'materialize-css'
import MenuBtn from './MenuBtn'
import AdminNav from './AdminNav'
import AdminLogout from './AdminLogout'

class NavBarContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sideNav: {},
      showMenuBtn: true
    }
  }

  componentDidMount() {
    //TODO: use a reference here
    const elem = document.querySelector(".sidenav")
    const instance = Sidenav.init(elem, {
        edge: "left",
        inDuration: 250,
        onOpenStart: () => this.setMenuBtn(false),
        onCloseEnd: () => this.setMenuBtn(true)
    })
    this.setState({sideNav: instance})
  }

  componentWillUnmount() {
    this.state.sideNav.destroy()
  }

  setMenuBtn = (value) => {
    this.setState({
      showMenuBtn: value
    })
  }

  toggleMenu = () => {
    const { sideNav } = this.state
    sideNav.isOpen ? sideNav.close() : sideNav.open()
  }

  render(){
    const { admin } = this.props
    const { showMenuBtn } = this.state

    return (
      <>
        <nav className='fullnav-container'>
          <div className="nav-wrapper">
            <ul className='fullnav' >
              <NavBar />
              {admin.auth && <AdminLogout />}
            </ul>
            {admin.auth && <AdminNav />}
          <MenuBtn show={showMenuBtn} toggleMenu={this.toggleMenu} />
          </div>
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