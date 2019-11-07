import React from 'react'
import './ControlPanel.css'

const ControlPanel = ({ onBold, onItalic, onUnderline, onSynonymous }) => (
  <div id='control-panel'>
    <div id='format-actions'>
      <button className='format-action' type='button' onClick={onBold}>
        <b>B</b>
      </button>
      <button className='format-action' type='button' onClick={onItalic}>
        <i>I</i>
      </button>
      <button className='format-action' type='button' onClick={onUnderline}>
        <u>U</u>
      </button>
      <button className='format-action' type='button' onClick={onSynonymous}>
        <span>Synonymous</span>
      </button>
    </div>
  </div>
)

export default ControlPanel
