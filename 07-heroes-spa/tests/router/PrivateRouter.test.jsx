import { PrivateRouter } from '../../src/router/PrivateRouter';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../src/auth';

describe('Pruebas en <PrivateRoute />', () => {
  test('Debe de mostrar el children si está autenticado', () => {
    Storage.prototype.setItem = jest.fn();

    const contextValue = {
      logged: true,
      user: {
        id: 'ÁBC',
        name: 'Jhoe'
      }
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/search?q=batman']}>
          <PrivateRouter>
            <h1>Private Route</h1>
          </PrivateRouter>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText('Private Route')).toBeTruthy();
    expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/search?q=batman');
  });
});
