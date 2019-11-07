import FileZone from './file-zone/FileZone'
import React, { useState, useEffect } from 'react'
import ControlPanel from './control-panel/ControlPanel'
import ModalSyn from './modal-syn/ModalSyn'
import TextService from './text.service'
import url from './config'
import './App.css'

const App = () => {
  const [defaultText, handleDefaultText] = useState('')
  const [currentWord, handleCurrentWord] = useState('')
  const [modalSyn, handleModalSyn] = useState(false)
  const [synFetch, handleSynFetch] = useState([])

  const toggle = () => {
    handleModalSyn(!modalSyn)
  }

  const onBold = () => {
    document.execCommand('bold')
  }

  const onItalic = () => {
    document.execCommand('italic')
  }

  const onUnderline = () => {
    document.execCommand('underline')
  }

  const onSynonymous = async () => {
    const mySelection = window.getSelection()
    let splitterSelection = mySelection.toString().replace('\n', ' ')
    splitterSelection = splitterSelection.split(' ')

    if (splitterSelection.length === 1) {
      handleCurrentWord(splitterSelection[0])
      const response = await window.fetch(`${url}${splitterSelection[0]}`)
      const data = await response.json()
      if (data) {
        handleSynFetch(data)
        toggle()
      }
    }
  }

  const replaceWordBySyn = word =>
    document.execCommand('insertText', false, word)

  const handleKeyDown = e => {
    if (e.key === 'Tab') {
      document.execCommand('insertHTML', false, '&#009')
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
          onBold={onBold}
          onItalic={onItalic}
          onUnderline={onUnderline}
          onSynonymous={onSynonymous}
        />
        <FileZone
          text={defaultText}
          handleText={handleDefaultText}
          handleKeyDown={handleKeyDown}
        />
        {modalSyn && (
          <ModalSyn>
            <h1>Select a synonymous</h1>
            {synFetch.length === 0 ? (
              <div>There are no synonymous to fetch</div>
            ) : (
              <div>
                <h1>Your word to replace: {currentWord}</h1>
                <div className='words-container'>
                  {synFetch.map(({ word }) => (
                    <button
                      className='word'
                      onClick={() => {
                        replaceWordBySyn(word)
                        toggle()
                      }}
                      key={word}
                    >
                      {word}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <button className='close' onClick={toggle}>
              CLOSE
            </button>
          </ModalSyn>
        )}
      </main>
    </div>
  )
}

export default App
