import React from 'react'
import PropTypes from 'prop-types'

const TextArea = React.forwardRef((props, ref) => {
  const { klass, id, value, children, handleChange, errors, editMode } = props
  
  const error = Object.keys(errors).length ? 
    (errors[id] ? errors[id] : '') : ''

  const inputKlass = 'materialize-textarea' + (error ?  ' invalid' : '')
  const labelKlass = editMode && value ? (id + ' active') : id

  return (  
    <div className={klass}>
      <div className='input-field'>
        <textarea 
          id={id}
          onChange={handleChange}
          value={value}
          className={inputKlass}
          ref={ref}
        />
        <label htmlFor={id} className={labelKlass}>{children}</label>
        {error && 
          <span data-error={error}></span>}
      </div>
    </div>
  )
})

TextArea.propTypes = {
  klass: PropTypes.string,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  errors: PropTypes.object,
  editMode: PropTypes.bool
}

TextArea.defaultProps = {
  klass: 'text-area',
  errors: {},
  editMode: false,
}

export default TextArea