import React, { Component } from 'react'
import { connect } from 'react-redux'

import { updateContactFormData, resetContactForm, sendMessage } from '../actions/contactFormActions'

class ContactForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      successMessage: '',
      name: '',
      email: '',
      subject: '',
      body: '',
      copy: false
    }
  }

  handleChange = event => {
    const { name, type, checked, value } = event.target
    const val = type === 'checkbox' ? checked : value

    const { updateContactFormData, contactFormData } = this.props

    const currentMessage = { ...contactFormData,  [name]:val }

    this.setState(() => {
      return { [name]: value }
    })
    
    updateContactFormData(currentMessage)
  }

  handleSubmit = event => {
    const { sendMessage, contactFormData } = this.props

    event.preventDefault()
    sendMessage(contactFormData)
      .then(message => {this.setState({
          successMessage: message
        })
      })
  }

  componentWillUnmount() {
    this.props.resetContactForm()
  }

  render() {
    const { successMessage, name, email, subject, body, copy } = this.state

    if(successMessage) {
      return <div>
        <h3>Say Hello</h3>
        <p>{successMessage}</p>
      </div>
    }

    return (
      <div>
        <h3>Say Hello</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              name="name"
              onChange={this.handleChange}
              value={name}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input 
              type="text" 
              name="email"
              onChange={this.handleChange}
              value={email}
            />
          </div>
          <div>
            <label htmlFor="subject">Subject</label>
            <input 
              type="text" 
              name="subject"
              onChange={this.handleChange}
              value={subject}
            />
          </div>
          <div>
            <label htmlFor="body">Message</label>
            <textarea 
              name="body"
              onChange={this.handleChange}
              value={body}
            />
          </div>
          <div>
            <label htmlFor="copy">Want a copy?</label>
            <input 
              type="checkbox"
              name="copy"
              onChange={this.handleChange}
              checked={copy}
            />
          </div>
          <br />
          <input type="submit" value="Send" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ contactFormData }) => ({ contactFormData })

export default connect(mapStateToProps, { updateContactFormData, resetContactForm, sendMessage })(ContactForm)

