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
    this.sideNavRef = React.createRef()
  }

  componentDidMount() {
    const elem = this.sideNavRef.current
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
              {admin.auth && <AdminLogout klass='full-logout' />}
            </ul>
            {admin.auth && <AdminNav klass='admin-nav' />}
            <MenuBtn show={showMenuBtn} toggleMenu={this.toggleMenu} />
          </div>
        </nav>

        <nav className='sidenav-container'>
          <ul id="slide-out" className="sidenav sidenav-close" ref={this.sideNavRef}>
            <NavBar />
            {admin.auth && 
              <>
                <li><div className='divider'></div></li>
                <AdminNav />
                <AdminLogout />
              </>}
          </ul>
        </nav>
      </>
    )
  }

  static propTypes = {
    admin: PropTypes.object.isRequired
  }
}

export default NavBarContainer