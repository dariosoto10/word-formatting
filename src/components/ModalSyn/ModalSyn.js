// @vendors
import React from 'react'
import PropTypes from 'prop-types'

// @components
import Loader from '../Loader'

// @hooks
import useModalSynonymous from './hook'

// @stylesdariosoto
import './ModalSyn.css'

export function ModalSyn ({ isOpen, handleClose, currentWord, replaceWordBySyn }) {
  const { errors, loading, synonymous } = useModalSynonymous(isOpen, currentWord)

  if (!isOpen) return null

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
