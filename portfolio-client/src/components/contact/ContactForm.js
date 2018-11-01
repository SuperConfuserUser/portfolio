import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ContactForm extends Component {

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
    const { name, email, subject, body, copy, errors } = this.props.contactFormData

    return (
      <form onSubmit={this.handleSubmit} className='contact-form'>
      <div>
            <input 
              type="text" 
              name="name"
              onChange={this.handleChange}
              value={name}
            className={errors.name && 'invalid'}
            />
          <label htmlFor="name">Name</label>
          {errors.name && 
            <span data-error={errors.name}></span>}
          </div>

          <div>
            <input 
              type="text" 
              name="email"
              onChange={this.handleChange}
              value={email}
            className={errors.email && 'invalid'}
            />
          <label htmlFor="email">Email</label>
          {errors.email && 
            <span data-error={errors.email[0]}></span>}
          </div>

          <div>
            <input 
              type="text" 
              name="subject"
              onChange={this.handleChange}
              value={subject}
            />
          <label htmlFor="subject">Subject (optional)</label>
          </div>

          <div>
          <div className="input-field">
            <textarea 
              id="body"
              name="body"
              onChange={this.handleChange}
              value={body}
              className={errors.body ? 'materialize-textarea invalid' : 'materialize-textarea'}
            />
            <label htmlFor="body">Message</label>
            {errors.body && 
              <span data-error={errors.body}></span>}
          </div>
          </div>

        <label>
            <input 
              type="checkbox"
              name="copy"
              onChange={this.handleChange}
              checked={copy}
            />
          <span>Want a copy?</span>
        </label>

        <button type="submit">Send</button>
        
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

