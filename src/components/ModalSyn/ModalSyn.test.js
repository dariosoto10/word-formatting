// @vendors
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'

// @components
import ModalSyn from './'

// @testing
test('testing ModalSyn component functionalities', () => {
  const handleCloseMock = jest.fn()
  const replaceWordBySynMock = jest.fn()


  const component = render(
    <ModalSyn
      isOpen
      currentWord="test"
      handleClose={handleCloseMock}
      replaceWordBySyn={replaceWordBySynMock}
    />
  )

  component.getByText('CLOSE')
})