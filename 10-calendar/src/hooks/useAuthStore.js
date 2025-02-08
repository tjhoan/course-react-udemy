import { useDispatch, useSelector } from 'react-redux';
import calendarApi from '../api/calendarApi';
import { onLogin, onChecking, onLogout, clearErrorMessage } from '../store';

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const startLogin = async ({ email, password }) => {
    dispatch(onChecking());
    try {
      const { data } = await calendarApi.post('/auth', { email, password });

      localStorage.setItem('token', data.token);
      localStorage.setItem('token-init-date', new Date().getTime());

      dispatch(onLogin({ name: data.name, uid: data.uid }));
    } catch (error) {
      dispatch(onLogout('Credenciales Incorrectas'));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 20);
    }
  };

  const startRegister = async ({ name, email, password }) => {
    dispatch(onChecking());
    try {
      const { data } = await calendarApi.post('/auth/new', { name, email, password });

      localStorage.setItem('token', data.token);
      localStorage.setItem('token-init-date', new Date().getTime());

      dispatch(onLogin({ name: data.name, uid: data.uid }));
    } catch (error) {
      dispatch(onLogout(error.response.data?.msg || 'Error en el registro'));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 20);
    }
  };

  const checkAuthToken = async () => {
    const token = localStorage.getItem('token');

    if (!token) {
      dispatch(onLogout(undefined));
      return;
    }

    try {
      const { data } = await calendarApi.get('/auth/renew');

      localStorage.setItem('token', data.token);
      localStorage.setItem('token-init-date', new Date().getTime());

      dispatch(onLogin({ name: data.name, uid: data.uid }));
    } catch (error) {
      localStorage.clear();
      console.log(error);
      dispatch(onLogout(undefined));
    }
  };

  const startLogout = () => {
    localStorage.clear();
    dispatch(onLogout(undefined));
  };

  return {
    // Propertiesé
    errorMessage,
    status,
    user,

    // Methods
    startLogin,
    startLogout,
    startRegister,
    checkAuthToken
  };
};
