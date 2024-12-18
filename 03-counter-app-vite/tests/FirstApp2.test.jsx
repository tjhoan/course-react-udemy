import { render, screen } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Preuebas en <FirstApp />', () => {
  const title = 'Hola, soy Goku';
  const subTitle = 'Soy un subtitulo';

  test('Debe de hacer match con el snapshot', () => {
    const { container } = render(<FirstApp title="Hola, soy Goku" />);
    expect(container).toMatchSnapshot(); // Un snapshot es una foto de un componente en un momento dado
  });

  test('Debe mostrar el mensaje "Hola, soy Goku"', () => {
    render(<FirstApp title={title} />);
    expect(screen.getByText(title)).toBeTruthy(); // getByText busca un texto en el componente y si lo encuentra devuelve el elemento
  });

  test('Debe de mostrar el titulo en un h1', () => {
    render(<FirstApp title={title} />);
    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title); // Me aseguro que el titulo se encuentre en el h1, getByRole busca un elemento por su rol
  });

  test('Debe de mostrar el subtitulo enviado por props=', () => {
    render(<FirstApp title={title} subTitle={subTitle} />);
    expect(screen.getAllByText(subTitle).length).toBe(1); // getAllByText busca todos los elementos que contengan el texto y devuelve un array
  });
});
