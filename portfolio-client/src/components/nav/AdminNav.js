import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function AdminNav(props) {

  const { klass } = props

  const renderAdminNav =  klass === 'admin-nav'
    ? <div className={klass}>
        <Link to='/admin'><i className='material-icons admin-icon'>settings</i></Link>
      </div>
    : <li className={klass}>
        <Link to='/admin'>Admin DashBoard</Link>
      </li>

  return (
    <>
      {renderAdminNav}
    </>
  )
}

AdminNav.propTypes = {
  klass: PropTypes.string
}

export default AdminNav
