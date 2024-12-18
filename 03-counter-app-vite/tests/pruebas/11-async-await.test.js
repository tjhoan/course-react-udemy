import { getImagen } from '../../src/pruebas/11-async-await';

describe('Pruebas en 11-async-await.js', () => {
  test('getImagen debe retornar un URL de la imagen', async () => {
    const url = await getImagen();
    console.log(url);
  });
});
