// @vendors
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'

// @components
import ControlPanel from './'

// @testing
test('testing ControlPanel component functionalities', () => {
  const onCommandTextMocked = jest.fn()
  const onSynonymousMocked = jest.fn()

  const component = render(
    <ControlPanel
      onSynonymous={onSynonymousMocked}
      onCommandText={onCommandTextMocked}
    />
  )

  const buttonCommand = component.getByText('B')
  fireEvent.click(buttonCommand.parentElement)

  expect(onCommandTextMocked).toBeCalledTimes(1)

  fireEvent.click(buttonCommand.parentElement)

  expect(onCommandTextMocked).toBeCalledTimes(2)

  const buttonSyn = component.getByText('Synonymous')

  fireEvent.click(buttonSyn.parentElement)
  expect(onSynonymousMocked).toHaveBeenCalled()
})
