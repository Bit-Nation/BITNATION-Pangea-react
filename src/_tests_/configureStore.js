import configureStore from '../configureStore';

describe('configureStore', () => {
  it('Should create redux store', () => {

    const expectedStore = {};

    expect(configureStore()).toEqual(expectedStore);
  })
})