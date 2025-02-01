import { useState, useMemo } from 'react';
import { addHours, differenceInSeconds } from 'date-fns';
import Swal from 'sweetalert2';

export const useCalendarForm = (initialValues) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formValues, setFormValues] = useState(
    initialValues || {
      title: '',
      notes: '',
      start: new Date(),
      end: addHours(new Date(), 2)
    }
  );

  const titleClass = useMemo(() => {
    if (!formSubmitted) return '';
    return formValues.title.trim().length < 2 ? 'is-invalid' : 'is-valid';
  }, [formValues.title, formSubmitted]);

  const onInputChange = ({ target }) => {
    setFormValues({ ...formValues, [target.name]: target.value });
  };

  const onDateChanged = (event, changing) => {
    setFormValues({ ...formValues, [changing]: event });
  };

  const validateForm = () => {
    setFormSubmitted(true);
    const difference = differenceInSeconds(formValues.end, formValues.start);

    if (isNaN(difference) || difference < 0) {
      Swal.fire('Fechas incorrectas', 'Revisa las fechas ingresadas', 'error');
      return false;
    }
    if (formValues.title.trim().length < 2) {
      Swal.fire('Título incorrecto', 'El título es obligatorio', 'error');
      return false;
    }
    return true;
  };

  return {
    formValues,
    titleClass,
    formSubmitted,
    onInputChange,
    onDateChanged,
    validateForm,
    setFormValues,
    setFormSubmitted
  };
};
