const { renderHook, waitFor } = require('@testing-library/react');
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Pruebas en el hook useFetchGifs', () => {
  test('Debe regresar el estado inicial', () => {
    // si no se ha cargado nada isLoading debe ser true y images vacio
    const { result } = renderHook(() => useFetchGifs('One Punch'));
    const [images, isLoading] = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test('Debe de retornar un arreglo de imagenes y isLoading en false', async () => {
    const { result } = renderHook(() => useFetchGifs('One Punch')); // se ejecuta el hook

    await waitFor(() => {
      // waitFor espera a que se resuelva la promesa
      const [images] = result.current;
      expect(images.length).toBeGreaterThan(0); // se espera que el arreglo de imagenes sea mayor a 0
    });

    const [images, isLoading] = result.current;

    expect(images.length).toBeGreaterThan(0); // se espera que el arreglo de imagenes sea mayor a 0
    expect(isLoading).toBeFalsy(); // se espera que isLoading sea false
  });
});
