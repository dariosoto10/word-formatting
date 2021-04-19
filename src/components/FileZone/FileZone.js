// @vendors
import React from 'react'
import PropTypes from 'prop-types'

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

FileZone.propTypes = {
  text: PropTypes.string.isRequired,
  handleKeyDown: PropTypes.func.isRequired
}
