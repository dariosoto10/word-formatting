import React from 'react'
import './FileZone.css'

const FileZone = ({ text, handleKeyDown }) => (
  <div id='file-zone'>
    <div id='file'>
      <div className='textEditor' contentEditable onKeyDown={handleKeyDown}>
        {text}
      </div>
    </div>
  </div>
)

export default FileZone
