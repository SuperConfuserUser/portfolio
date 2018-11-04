import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TextArea extends Component {

  render() {
    const { klass, id, value, children, handleChange, errors, editMode, innerRef } = this.props
  
    const error = Object.keys(errors).length ? 
      (errors[id] ? errors[id] : '') : ''

    const inputKlass = error ? 'materialize-textarea invalid' : 'materialize-textarea'
    const labelKlass = editMode && value ? (id + ' active') : id

    return (  
      <div className={klass}>
        <div className='input-field'>
          <textarea 
            id={id}
            onChange={handleChange}
            value={value}
            className={inputKlass}
            ref={innerRef}
          />
          <label htmlFor={id} className={labelKlass}>{children}</label>
          {error && 
            <span data-error={error}></span>}
        </div>
      </div>
    )
  }

  static propTypes = {
    klass: PropTypes.string,
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    errors: PropTypes.object,
    editMode: PropTypes.bool
  }

  static defaultProps = {
    klass: 'text-area',
    errors: {},
    editMode: false,
  }
}

export default React.forwardRef((props, ref) => 
  <TextArea innerRef={ref} {...props} />
)