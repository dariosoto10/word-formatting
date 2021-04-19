// @vendors
import React from 'react'
import PropTypes from 'prop-types'

// @components
import Button from '../Button'

// @constants
import COMMANDS from '../../constants'

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

ControlPanel.propTypes = {
  onSynonymous: PropTypes.func.isRequired,
  onCommandText: PropTypes.func.isRequired
}
