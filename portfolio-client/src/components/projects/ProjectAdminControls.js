import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { toggleShowHidden } from '../../actions/adminActions'

class ProjectAdminControls extends Component {
  
  constructor(props) {
    super(props)
    this.handleShowHidden = this.handleShowHidden.bind(this)
  }
  
  handleShowHidden = () => {
    this.props.toggleShowHidden()
  }

  render() {
    const { admin } = this.props

    return (
      <div>
        <br />
        Project Controls: &nbsp;
        <Link to='projects/new'>+</Link> &nbsp;
        <button onClick={this.handleShowHidden}>{admin.showHidden ? 'Hide Hidden' : 'Show Hidden'}</button>
      </div>
    )
  }
}

const mapStateToProps = ({ admin }) => ({ admin })

export default withRouter(
  connect(mapStateToProps, { toggleShowHidden })(ProjectAdminControls)
)
