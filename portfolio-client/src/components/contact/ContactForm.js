import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TextInput from '../form/TextInput'
import TextArea from '../form/TextArea'

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
    const { id, type, checked, value } = event.target
    const val = type === 'checkbox' ? checked : value
    const { updateMessage, contactFormData } = this.props
    const currentMessage = { ...contactFormData,  [id]:val }

    this.setState(() => {
      return { [id]: val }
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

        <TextInput id='name' value={name} handleChange={this.handleChange} errors={errors}>Name</TextInput>

        <TextInput id='email' value={email} handleChange={this.handleChange} errors={errors}>Email</TextInput>

        <TextInput id='subject' value={subject} handleChange={this.handleChange}>Subject (optional)</TextInput>


        <TextArea id='body' value={body} handleChange={this.handleChange} errors={errors}>Message</TextArea>

        <label>
          <input 
            type='checkbox'
            id='copy'
            onChange={this.handleChange}
            checked={copy}
          />
          <span>Want a copy?</span>
        </label>

        <button type='submit'>Send</button>
        
      </form>
    )
  }

  static propTypes = {
    contactFormData: PropTypes.object.isRequired,
    updateMessage: PropTypes.func.isRequired,
    sendMessage: PropTypes.func.isRequired,
  }
}

export default ContactForm

