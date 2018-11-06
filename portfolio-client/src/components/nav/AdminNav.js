import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function AdminNav(props) {

  const { klass } = props

  return (
      <li className={klass}><Link to='/admin'>
        { klass === 'admin-nav'
          ? <i className='material-icons admin-icon'>settings</i>
          : 'Admin Dashboard'
        }
      </Link></li>
  )
}

AdminNav.propTypes = {
  klass: PropTypes.string
}

export default AdminNav
