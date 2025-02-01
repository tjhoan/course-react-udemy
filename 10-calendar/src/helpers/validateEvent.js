import { differenceInSeconds } from 'date-fns';
import Swal from 'sweetalert2';

export const validateEvent = (formValues) => {
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
