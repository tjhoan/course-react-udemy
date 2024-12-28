import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

const props = {
  title: 'Hola, soy Goku',
  id: 'Gt23ioj23gvhgv43',
  url: 'https://qweqweqwe.png'
};

describe('Pruebas en <GifItem />', () => {
  test('Debe de hacer match con el snapshot', () => {
    const { container } = render(<GifItem {...props} />);
    expect(container).toMatchSnapshot();
  });

  test('Debe de coincidir el título del props y el del componente', () => {
    const { getByText } = render(<GifItem {...props} />);
    expect(getByText(props.title)).toBeTruthy();
  });

  test('Debe de mostrar la imagen con el URL y el ALT indicado', () => {
    render(<GifItem {...props} />);
    const { src, alt } = screen.getByRole('img');
    expect(src).toBe(`${props.url}/`);
    expect(alt).toBe(props.title);
  });

  test('Debe de mostrar el titulo del componente', () => {
    render(<GifItem {...props} />);
    expect(screen.getByText(props.title)).toBeTruthy();
  });
});
