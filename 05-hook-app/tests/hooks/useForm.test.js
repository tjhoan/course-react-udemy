import { act, renderHook } from '@testing-library/react';
import { useForm } from '../../src/hooks/useForm';

describe('Pruebas en el useForm', () => {
  const initialForm = {
    name: 'Jhon',
    email: 'Jhon@gmail.com'
  };

  test('Debe regresar los valores por defecto', () => {
    const { result } = renderHook(() => useForm(initialForm));
    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function)
    });
  });

  test('Debe de cambiar el nombre del formulario', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const newName = 'Melissa';
    const { onInputChange } = result.current;

    act(() => {
      onInputChange({ target: { name: 'name', value: newName } });
    });

    expect(result.current.name).toBe(newName);
    expect(result.current.formState.name).toBe(newName);
  });
});
