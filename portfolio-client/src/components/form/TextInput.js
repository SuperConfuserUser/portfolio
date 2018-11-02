import React from 'react'
import PropTypes from 'prop-types'

const TextInput = props => {
  
  const { klass, type, id, value, children, handleChange, errors, editMode} = props
  
  const error = Object.keys(errors).length ? 
    (errors[id] ? errors[id] : '')
    : ''

  const inputKlass = error ? 'invalid' : ''
  const labelKlass = editMode && value ? (id + ' active') : id
  
  return (  
    <div className={klass}>
      <input
        type={type}
        id={id}
        onChange={handleChange}
        value={value}
        className={inputKlass}
      />
      <label htmlFor={id} className={labelKlass}>{children}</label>
      {error && 
        <span data-error={error}></span>}
    </div>
  )
}

TextInput.propTypes = {
  klass: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  errors: PropTypes.object,
  editMode: PropTypes.bool
}

TextInput.defaultProps = {
  klass: 'text-input',
  type: 'text',
  errors: {},
  editMode: false
}

export default TextInput

