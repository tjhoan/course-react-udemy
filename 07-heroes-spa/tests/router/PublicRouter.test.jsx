import { render, screen } from '@testing-library/react';
import { PublicRouter } from '../../src/router/PublicRouter';
import { AuthContext } from '../../src/auth';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('Pruebas en <PublicRoute />', () => {
  test('Debe de mostrar el children si no está autenticado', () => {
    const contextValue = {
      logged: false
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRouter>
          <h1>Public Route</h1>
        </PublicRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText('Public Route')).toBeTruthy();
  });

  test('Debe de navegar si esta autenticado', () => {
    const contextValue = {
      logged: true,
      user: {
        name: 'Jhoe',
        id: '123'
      }
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/login']}>
          <Routes>
            <Route
              path="login"
              element={
                <PublicRouter>
                  <h1>Public Route</h1>
                </PublicRouter>
              }
            />
            <Route path="marvel" element={<h1>Marvel Page</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText('Marvel Page')).toBeTruthy();
  });
});
