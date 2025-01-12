import { fireEvent, screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../../src/auth';
import { Navbar } from '../../../src/ui';

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUseNavigate
}));

describe('Pruebas en <Navbar />', () => {
  const contextValue = {
    logged: true,
    user: {
      id: '123',
      name: 'Jhoe'
    },
    logout: jest.fn()
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Debe de mostrar el nombre del usuario', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <AuthContext.Provider value={contextValue}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getByText('Jhoe')).toBeTruthy();
  });

  test('Debe llamar el logout y navigate cuando se hace click en el botón', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <AuthContext.Provider value={contextValue}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    const logoutButton = screen.getByRole('button');
    fireEvent.click(logoutButton);

    expect(contextValue.logout).toHaveBeenCalled();
    expect(mockUseNavigate).toHaveBeenCalledWith('/login', { replace: true });
  });
});
