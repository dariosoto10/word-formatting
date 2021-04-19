// @vendors
import React, { useState, useEffect } from 'react'

// @components
import FileZone from './components/FileZone'
import ModalSyn from './components/ModalSyn'
import ControlPanel from './components/ControlPanel'

// @services
import TextService from './services/textService'

// @constants
import CONSTANTS from './constants'


// @styles
import './App.css'

export default function App() {
  const [defaultText, handleDefaultText] = useState('')
  const [currentWord, handleCurrentWord] = useState('')
  const [modalSyn, handleModalSyn] = useState(false)

  const toggle = () => handleModalSyn(!modalSyn)
  const onCommandText = command => document.execCommand(command)

  const onSynonymous = async () => {
    const mySelection = window.getSelection()
    const splitterSelection = mySelection.toString().replace('\n', ' ').split(' ').filter(selection => selection)

    if (splitterSelection.length) {
      handleCurrentWord(splitterSelection[0])
      toggle()
    }
  }

  const replaceWordBySyn = word => document.execCommand(CONSTANTS.INSERT_TEXT, false, word)

  const handleKeyDown = e => {
    if (e.key === 'Tab') {
      document.execCommand(CONSTANTS.INSERT_HTML, false, '&#009')
      e.preventDefault()
    }
  }

  useEffect(async () => {
    handleDefaultText(await TextService())
  }, [])

  return (
    <div className='App'>
      <header>
        <span>Simple Text Editor</span>
      </header>
      <main>
        <ControlPanel
          onSynonymous={onSynonymous}
          onCommandText={onCommandText}
        />
        <FileZone
          text={defaultText}
          handleKeyDown={handleKeyDown}
          handleText={handleDefaultText}
        />
        <ModalSyn
          isOpen={modalSyn}
          handleClose={toggle}
          currentWord={currentWord}
          replaceWordBySyn={replaceWordBySyn}
        />
      </main>
    </div>
  )
}
