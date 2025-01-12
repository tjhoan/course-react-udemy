import { types } from '../../../src/auth';

describe('Pruebas en Types.js', () => {
  test('Debe de regresar los types predefinidos', () => {
    expect(types).toEqual({
      login: '[auth] login',
      logout: '[auth] logout'
    });
  });
});
