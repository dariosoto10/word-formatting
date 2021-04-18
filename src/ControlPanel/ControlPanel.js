// @vendors
import React from 'react'

// @components
import Button from '../components/Button'

// @constants
import COMMANDS from '../constants'

// @styles
import './ControlPanel.css'

export function ControlPanel ({ onCommandText, onSynonymous }) {
  return (
    <div id='control-panel'>
      <div id='format-actions'>
        <Button command={COMMANDS.BOLD} onCommandText={onCommandText}>
          <b>B</b>
        </Button>
        <Button command={COMMANDS.ITALIC} onCommandText={onCommandText}>
          <i>I</i>
        </Button>
        <Button command={COMMANDS.UNDERLINE} onCommandText={onCommandText}>
          <u>U</u>
        </Button>
        <Button onCommandText={onSynonymous}>
          <span>Synonymous</span>
        </Button>
      </div>
    </div>
  )
}
