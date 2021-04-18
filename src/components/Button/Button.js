// @vendors
import React from 'react'

// @styles
import './Button.css'

export function Button({ children, command, onCommandText }) {
  return (
    <button className='format-action' onClick={() => { onCommandText(command) }}>
      {children}
    </button>
  )
}
