import { retornaArreglo } from '../../src/pruebas/07-deses-arr';

describe('Pruebas en 07-deses-arr.js', () => {
  test('Debe retornar un string y un numero', () => {
    const [letters, numbers] = retornaArreglo();

    expect(letters).toBe('ABC');
    expect(typeof letters).toBe('string');

    expect(numbers).toBe(123);
    expect(typeof numbers).toBe('number');
  });
});
