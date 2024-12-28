describe('Prueba de si codigo funciona correctamente', () => {
  test('Deberia aparecer el nombre de Tony', () => {
    const { persona } = require('../../src/pruebas/06-deses-obj');
    const { nombre } = persona;
    console.log(nombre);
    expect(nombre).toBe('Tony');
  });
});
