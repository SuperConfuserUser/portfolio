import React from 'react'
import PropTypes from 'prop-types'

function DetailLinkList(props) {
  const { links } = props
  
  const renderLinks = links.map(link => 
    <li key={link.id}>
      <a href={link.url} alt={link.name} target='_blank' rel="noopener noreferrer">{link.name}</a>
    </li>
  )
  return (
    <ul className='link-list'>
      {renderLinks}
    </ul>
  )
}

DetailLinkList.propTypes = {
  links: PropTypes.array.isRequired
}

export default DetailLinkList

