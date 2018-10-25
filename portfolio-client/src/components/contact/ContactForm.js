import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ContactForm extends Component {

  static propTypes = {
    contactFormData: PropTypes.object.isRequired,
    updateMessage: PropTypes.func.isRequired,
    sendMessage: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
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
    const { updateMessage, contactFormData } = this.props
    const currentMessage = { ...contactFormData,  [name]:val }

    this.setState(() => {
      return { [name]: val }
    })
    
    updateMessage(currentMessage)
  }

  handleSubmit = event => {
    const { sendMessage, contactFormData } = this.props

    event.preventDefault()
    sendMessage(contactFormData)
  }

  render() {
    const { name, email, subject, body, copy } = this.props.contactFormData

    return (
      <div>
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

  static propTypes = {
    contactFormData: PropTypes.object.isRequired,
    updateMessage: PropTypes.func.isRequired,
    sendMessage: PropTypes.func.isRequired,
  }
}

export default ContactForm

