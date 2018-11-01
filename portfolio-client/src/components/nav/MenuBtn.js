import React from 'react'
import PropTypes from 'prop-types'

function MenuBtn(props) {
  const { show, toggleMenu } = props
  const klass = 'show-menu-btn icon'
  const klassHidden = klass + ' open'

  return (
    <div className={show ? klass : klassHidden} onClick={toggleMenu}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

MenuBtn.propTypes = {
  show: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired
}

export default MenuBtn

