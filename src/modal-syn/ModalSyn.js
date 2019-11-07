import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import './ModalSyn.css'

const portalRoot = document.getElementById('modal')

const Portal = ({ children }) => {
  const el = document.createElement('div')

  useEffect(
    () => {
      portalRoot.appendChild(el)
    },
    () => {
      portalRoot.removeChild(el)
    }
  )

  return ReactDOM.createPortal(
    <div className='modal-container'>
      <div className='modal-content'>{children}</div>
    </div>,
    el
  )
}

export default Portal
