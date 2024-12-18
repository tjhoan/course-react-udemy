import { fireEvent, render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas en <GifExpertApp />', () => {
  const value = 'Saitama';

  test('Debe de hacer match con el snapshot', () => {
    const { container } = render(<GifExpertApp />);
    expect(container).toMatchSnapshot();
  });

  test('Debe de cambiar el texto en el input', () => {
    render(<GifExpertApp />);

    const input = screen.getByRole('textbox');
    fireEvent.input(input, { target: { value } });
    expect(input.value).toBe('Saitama'); // Verifica que el valor del input sea 'Saitama'
  });

  test('Debe mostrar la nueva categoría ingresada en el input', () => {
    render(<GifExpertApp />);
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value } }); // Simula el ingreso de un valor en el input
    fireEvent.submit(form); // Simula el envío del formulario

    expect(screen.getByText('Saitama')); // Verifica que el texto 'Saitama' se encuentre en el documento
  });

  test('No debe guardar la categoría si ya existe', () => {
    render(<GifExpertApp />);
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value } });
    fireEvent.submit(form);

    expect(screen.getByText('Saitama')); // Verifica que el texto 'Saitama' se encuentre en el documento

    fireEvent.input(input, { target: { value } });
    fireEvent.submit(form);

    const categories = screen.getAllByText('Saitama'); // Verifica que haya un solo elemento con el texto 'Saitama'
    expect(categories.length).toBe(1); // Verifica que haya un solo elemento con el texto 'Saitama'
  });
});
