// @vendors
import React from 'react'
import PropTypes from 'prop-types'

// @styles
import './Button.css'

export function Button({ children, command, onCommandText }) {
  return (
    <button className='format-action' onClick={() => { onCommandText(command) }}>
      {children}
    </button>
  )
}

Button.propTypes = {
  command: PropTypes.string,
  children: PropTypes.node.isRequired,
  onCommandText: PropTypes.func.isRequired
}

Button.defaultProps = {
  command: null
}
