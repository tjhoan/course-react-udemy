/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useState } from 'react';

export const useForm = (initialForm = {}, formValidations = {}) => {
  const [formState, setFormState] = useState(initialForm); // email, password, etc
  const [formValidation, setFormValidations] = useState({}); // emailValid, passwordValid. etc

  useEffect(() => {
    createValidators(); // Crea los validadores iniciales.
  }, [formState]);

  useEffect(() => {
    setFormState(initialForm); // Reinicia el formulario.
  }, [initialForm]);

  const isFormValid = useMemo(() => {
    // Se usa useMmeo para evitar renderizados innecesarios.
    for (const formValue of Object.keys(formValidation)) {
      if (formValidation[formValue] !== null) return false; // Example: if (emailValid !== null) return false
    }
    return true;
  }, [formValidation]);

  const onInputChange = ({ target }) => {
    const { name, value } = target; // Extrae el nombre y el valor del input.
    setFormState({
      ...formState,
      [name]: value // Actualiza solo el campo que cambió.
    });
  };

  const onResetForm = () => {
    setFormState(initialForm); // Reinicia el formulario.
  };

  const createValidators = () => {
    const formCheckedValues = {};
    for (const formField of Object.keys(formValidations)) {
      const [validator, errorMessage] = formValidations[formField];
      formCheckedValues[`${formField}Valid`] = validator(formState[formField]) // formField = email, password, etc
        ? null
        : errorMessage;
    }
    setFormValidations(formCheckedValues); // Actualiza los validadores.
  };

  return {
    ...formState, // email y password
    formState,
    onInputChange, // Para manejar cambios en los inputs.
    onResetForm, // Para reiniciar el formulario.
    ...formValidation, // emailValid y passwordValid
    isFormValid // Para saber si el formulario es válido.
  };
};
