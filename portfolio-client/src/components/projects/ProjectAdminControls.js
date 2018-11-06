import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { toggleShowHidden } from '../../actions/adminActions'
import ProjectAdminButtons from './ProjectAdminButtons'
import ProjectAddButton from './ProjectAddButton'
import ProjectVisibilityButton from './ProjectVisibilityButton'

class ProjectAdminControls extends Component {
  
  render() {
    const { admin, match, project, toggleShowHidden } = this.props

    const renderProjectControls = project 
      ? <ProjectAdminButtons admin={admin} project={project} klass='admin-nav' />
      : ''

    return (
      <nav className='project-nav-container'>
        <div className='nav-wrapper'>
          <ul className='project-nav'>
            <li>
              <ProjectAddButton />
            </li>
            <li>
              <ProjectVisibilityButton admin={admin} toggleShowHidden={toggleShowHidden}/>
            </li>
            {renderProjectControls}
          </ul>
        </div>
      </nav>
    )
  }

  static propTypes = {
    admin: PropTypes.object.isRequired,
    project: PropTypes.object
  }
}

const mapStateToProps = ({ admin }) => ({ admin })

export default withRouter(
  connect(mapStateToProps, { toggleShowHidden })(ProjectAdminControls)
)
