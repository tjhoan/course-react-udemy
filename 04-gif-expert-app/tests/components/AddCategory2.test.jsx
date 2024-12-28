import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory2 } from '../../src/components/AddCategory2';

describe('Pruebas en <AddCategory2 />', () => {
  test('Debe de cambiar el valor de la caja de texto', () => {
    render(<AddCategory2 onNewCategory={() => {}} />);
    const input = screen.getByRole('textbox'); // Trae el input

    fireEvent.input(input, { target: { value: 'Saitama' } }); // Con fireEvent se simula un evento, en este caso un input que se le ingresa un valor
    expect(input.value).toBe('Saitama');
    // screen.debug();
  });

  test('Debe de llamar onNewCategory si el input tiene un valor', () => {
    const inputValue = 'Saitama';
    const onNewCategory = jest.fn(); // Se crea una función mock

    render(<AddCategory2 onNewCategory={onNewCategory} />); // Se renderiza el componente con la función mock

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form'); // Se obtiene el formulario

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form); // Se simula el envío del formulario con el evento submit
    expect(input.value).toBe('');

    expect(onNewCategory).toHaveBeenCalled(); // Se espera que la función haya sido llamada
    expect(onNewCategory).toHaveBeenCalledTimes(1); // Se espera que la función haya sido llamada una vez
    expect(onNewCategory).toHaveBeenCalledWith(inputValue); // Se espera que la función haya sido llamada con el valor del input

    // screen.debug();
  });

  test('No debe llamar el onNewCategory si el input esta vacio', () => {
    const inputValue = 'a'; // Dependiendo de la longitud del input se va a llamar o no a la función
    const onNewCategory = jest.fn();

    render(<AddCategory2 onNewCategory={onNewCategory} />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: inputValue } }); // Se simula el cambio del input
    expect(input.value).toBe(inputValue);
    fireEvent.submit(form); // Se simula el envío del formulario con el evento submit

    // expect(onNewCategory).toHaveBeenCalledTimes(1); // si se espera que se llame a la función
    expect(onNewCategory).not.toHaveBeenCalled(); // si se espera que no se llame a la función
  });
});
