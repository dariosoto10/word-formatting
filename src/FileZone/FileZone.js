// @vendors
import React from 'react'

// @vendors
import './FileZone.css'

export function FileZone ({ text, handleKeyDown }) {
  return (
    <div id='file-zone'>
      <div id='file'>
        <div className='textEditor' contentEditable onKeyDown={handleKeyDown}>
          {text}
        </div>
      </div>
    </div>
  )
}
