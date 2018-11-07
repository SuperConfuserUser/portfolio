import React from 'react'
import PropTypes from 'prop-types'
import DetailLinkList from './DetailLinkList'
import ProjectAdminControls from './ProjectAdminControls'

function Project(props) {
  const { name, img_url, category, content, description, created_at, links } = props.project
  
  const date = new Date(created_at)
  .toLocaleDateString('en-US', {
    year: 'numeric', month: 'long'
  })

 
  return (
    <>
      { props.admin.auth && 
        <ProjectAdminControls project={props.project} />}

      <div className='project-detail'>
        <h2>
        {name}
          <span>{date}, {category}</span>
        </h2>

        <img src={img_url} alt={name} />

        <h5>{description}</h5>

        <div dangerouslySetInnerHTML={{ __html: content }} />

        <DetailLinkList links={links} />
      </div>
    </>
  )
}

Project.propTypes = {
  project: PropTypes.object.isRequired
}

export default Project

