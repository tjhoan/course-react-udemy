import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Preuebas en <FirstApp />', () => {
  test('Debe de hacer match con el snapshot', () => {
    const title = 'Hola, soy Goku';
    const { container } = render(<FirstApp title="Hola, soy Goku" />);
    expect( container ).toMatchSnapshot(); // Un snapshot es una foto de un componente en un momento dado

    const h1 = container.querySelector('div');
    console.log(h1.innerHTML);
    expect(h1.innerHTML).toContain(title); // Me aseguro que el titulo se encuentre en el h1
  });

  test('Debe mostrar el titulo en el h1', () => {
    const title = 'Hola, soy Goku';
    const { container, getByText, getByTestId } = render(<FirstApp title={title} />);
    expect(getByText(title)).toBeTruthy();
    expect(getByTestId('test-title').innerHTML).toContain(title); // Me aseguro que el titulo se encuentre en el h1
    console.log(getByTestId('test-title').innerHTML); // Hola, soy Goku
  });

  test('Debe de mostrar el subtitulo enviado por props', () => { 
    const title = 'Hola, soy Goku';
    const subTitle = 123456;
    const { getByText } = render(<FirstApp title={title} subTitle={subTitle} />);
    expect(getByText(subTitle)).toBeTruthy(); // getByText busca un texto en el componente y si lo encuentra devuelve el elemento
   })
});