describe('Pruebas en < DemoComponent />', () => {
  test('Esta prueba no debe de fallar', () => {
    const mensaje = 'Hola Mundo';
    const mensaje2 = mensaje.trim();
    expect(mensaje).toBe(mensaje2);
  });
});
