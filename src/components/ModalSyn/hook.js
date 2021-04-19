// @vendors
import { useState, useEffect, useCallback } from 'react'

// @config
import CONFIG from '../../config'

// @initial state
const initialState = {
  errors: '',
  loading: false,
  synonymous: []
}

function useModalSynonymous(isOpen, currentWord) {
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

  return synonymousState
}

export default useModalSynonymous
