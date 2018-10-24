import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ContactForm from './ContactForm'
import ContactFormResponse from './ContactFormResponse'
import { updateMessage, sendMessage, resetContactForm } from '../../actions/contactFormActions'

export class ContactFormContainer extends Component {

  static propTypes = {
    successResponse: PropTypes.string.isRequired,
    message: PropTypes.object.isRequired,
    updateMessage: PropTypes.func.isRequired,
    sendMessage: PropTypes.func.isRequired,
    resetContactForm: PropTypes.func.isRequired
  }

  componentWillUnmount() {
    this.props.resetContactForm()
  }

  render() {
    const {successResponse, message, updateMessage, sendMessage } = this.props

    return (
      <div>
        <h3>Let's Chat</h3>
        {successResponse ? 
          <ContactFormResponse response={successResponse} /> : 
          <ContactForm 
            contactFormData={message} 
            updateMessage={updateMessage} 
            sendMessage={sendMessage} 
          />
        }
      </div>
    )
  }
}

const mapStateToProps = ({ contactFormData }) => ({
  successResponse: contactFormData.successResponse, 
  message: contactFormData.message
})

export default connect(
  mapStateToProps, { 
    updateMessage, 
    sendMessage,
    resetContactForm
  })(ContactFormContainer)
