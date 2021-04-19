// @vendors
import React, { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'

// @components
import Loader from '../Loader'

// @config
import CONFIG from '../../config'

// @stylesdariosoto
import './ModalSyn.css'

// @initial state
const initialState = {
  errors: '',
  loading: false,
  synonymous: []
}

export function ModalSyn ({ isOpen, handleClose, currentWord, replaceWordBySyn }) {
  const [synonymousState, setSynonymousState] = useState(initialState)

  const fetchSynonymous = useCallback(async () => {
    setSynonymousState({
      ...synonymousState,
      loading: true
    })
  
    try {
      const response = await window.fetch(`${CONFIG.URL}${currentWord}`)
      const data = await response.json()

      if (data.length) {
        setSynonymousState({
          ...initialState,
          loading: false,
          synonymous: data
        })
      } else {
        setSynonymousState({
          ...initialState,
          loading: false,
          errors: `Could not fetch synonymous with the text: ${currentWord}`
        })
      }
      
    } catch (error) {
      setSynonymousState({
        ...initialState,
        errors: `Could not fetch synonymous with the text: ${currentWord}`
      })
    }
  })

  useEffect(() => {
    if (isOpen) {
      fetchSynonymous()
    } else {
      setSynonymousState(initialState)
    }
  }, [isOpen, currentWord])

  if (!isOpen) return null

  const { errors, loading, synonymous } = synonymousState

  return (
    <div className='modal-container'>
      <div className='modal-content'>
        {errors && <h1>{errors}</h1>}
        {loading && <Loader />}
        {!loading && !!synonymous.length &&
          <div>
            <h1>Your word to replace: {currentWord}</h1>
            <div className='words-container'>
              {synonymous.map(({ word }) => (
                <button
                  className='word'
                  onClick={() => {
                    replaceWordBySyn(word)
                    handleClose()
                  }}
                  key={word}
                >
                  {word}
                </button>
              ))}
            </div>
          </div>
        }
        <button className='close' onClick={handleClose}>
          CLOSE
        </button>
      </div>
    </div>
  )
}

ModalSyn.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  currentWord: PropTypes.string.isRequired,
  replaceWordBySyn: PropTypes.func.isRequired,
}
