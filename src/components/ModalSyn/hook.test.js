// @vendors
import { renderHook } from '@testing-library/react-hooks'
import useModalSynonymous from './hook'

function mockFetch() {
  return Promise.resolve({
    json: () => Promise.resolve([]),
  });
}

beforeAll(() => {
  jest.spyOn(global, 'fetch').mockImplementation(() => mockFetch);
})


test('testing hook fetch API functionalities', async () => {
  const { result, waitForNextUpdate } = renderHook(
    () => useModalSynonymous(true, 'test')
  );

  expect(result.current.loading).toBeTruthy()

  await waitForNextUpdate()

  expect(result.current.loading).toBeFalsy()
  expect(global.fetch).toHaveBeenCalledTimes(1)
})
