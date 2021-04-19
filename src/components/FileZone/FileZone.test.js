// @vendors
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'

// @components
import FileZone from './'

// @testing
test('testing FileZone component functionalities', () => {
  const codeKeyDown = 'Enter'
  const textMocked = "testing file zone text"
  const handleKeyDownMocked = jest.fn()

  const component = render(
    <FileZone
      text={textMocked}
      handleKeyDown={handleKeyDownMocked}
    />
  )

  const textArea = component.getByText(textMocked)
  fireEvent.keyDown(textArea, { key: codeKeyDown, code: codeKeyDown })

  expect(handleKeyDownMocked).toHaveBeenCalled()
})
