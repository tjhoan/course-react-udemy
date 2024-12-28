import { getHeroeByIdAsync } from '../../src/pruebas/09-promesas';

describe('Pruebas en 09-promesas', () => {
  test('getHeroeByIdAsync debe retornar un heroe', (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe.name).toBe('Batman');
      done(); // done es para terminar la prueba asincrona
    });
  });
});
