import { getGifs } from '../../src/helpers/getGifs';

describe('Pruebas en getGifs()', () => {
  let gifs;

  beforeAll(async () => {
    gifs = await getGifs('One Punch');
  });

  test('Debe retornar un arreglo de gifs', () => {
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs).toBeTruthy();
  });

  test('El primer elemento de gifs, debe tener los atributos id, title y url', () => {
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String)
    });
  });
});
