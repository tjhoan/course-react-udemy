import { fireEvent, render, screen } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';

describe('Pruebas en <CounterApp.jsx />>', () => {
  test('Debe de hacer match con el snapshot', () => {
    const { container } = render(<CounterApp value={100} />);
    expect(container).toMatchSnapshot(); // Un snapshot es una foto de un componente en un momento dado
  });

  test('Debe de mostrar el valor inicial de 100', () => {
    render(<CounterApp value={100} />);
    expect(screen.getByText('100')).toBeTruthy(); // El valor inicial debe ser 100 y se busca con getByText
  });

  test('Debe de incrementar con el boton +1', () => {
    render(<CounterApp value={100} />);
    fireEvent.click(screen.getByText('+1'));
    expect(screen.getByText('101')).toBeTruthy(); // Despues de hacer click en el boton +1 el valor debe ser 101
  });

  test('Debe de funcionar el boton de reset', () => {
    render(<CounterApp value={100} />);
    fireEvent.click(screen.getByText('+1')); // fireEvent simula un evento en un elemento del DOM (en este caso un click)
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByRole('button', { name: 'btn-reset' })); // getByRole busca un elemento por su rol
    expect(screen.getByText('100')).toBeTruthy(); // Despues de hacer click en el boton reset el valor debe ser 100
  });
});