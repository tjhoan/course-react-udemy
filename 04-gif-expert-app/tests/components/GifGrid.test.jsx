import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
  const category = 'One Punch';

  test('Debe mostrar el loading inicialmente', () => {
    useFetchGifs.mockReturnValue([[], true]);

    render(<GifGrid category={category} />);
    expect(screen.getByText('Cargando...'));
    expect(screen.getByText(category));
  });

  test('Debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {
    const gifs = [
      {
        id: 'ABC',
        url: 'https://localhost/cualquier/cosa.jpg',
        title: 'Cualquier cosa',
      },
      {
        id: '123',
        url: 'https://localhost/cualquier/cosa.jpg',
        title: 'Cualquier cosa',
      },
    ];

    useFetchGifs.mockReturnValue([gifs, false]);

    render(<GifGrid category={category} />);
    screen.debug();

    expect(screen.getAllByRole('img').length).toBe(gifs.length); // Probar que hayan 2 img, una por cada gif
    // Probar que los títulos de los gifs se encuentran en el documento
    const titles = screen.getAllByText('Cualquier cosa');
    expect(titles.length).toBe(gifs.length); // Verifica que hay el mismo número de títulos que gifs
  });
});