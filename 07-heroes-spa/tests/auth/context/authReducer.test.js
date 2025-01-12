import { authReducer } from '../../../src/auth';
import { types } from '../../../src/auth';

describe('Pruebas en authReducer', () => {
  test('Debe de retornar el estado por defecto', () => {
    const stateReturn = authReducer({ logged: false }, {});
    expect(stateReturn).toEqual({ logged: false });
  });

  test('Debe llamar el login autenticar y establecer el user', () => {
    const action = {
      type: types.login,
      payload: {
        name: 'Jhoe'
      }
    };

    const stateReturn = authReducer({ logged: false }, action);
    expect(stateReturn).toEqual({ logged: true, user: { name: 'Jhoe' } });
  });

  test('Debe borrar el name del usuario y logged en false', () => {
    const action = {
      type: types.logout
    };

    const stateReturn = authReducer({ logged: true, user: { name: 'Juan' } }, action);
    expect(stateReturn).toEqual({ logged: false });
  });
});
