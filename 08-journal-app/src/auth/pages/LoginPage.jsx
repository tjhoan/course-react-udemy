import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Google } from '@mui/icons-material';
import { useMemo, useState } from 'react';

import { startGoogleSignIn, startLoginWithEmailAndPassword } from '../../store/auth';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';

const formData = {
  email: 'correo@gmail.com',
  password: '123456'
};

const formValidations = {
  email: [
    // (value) => value.includes('@'), 'El correo debe de tener una @',
    (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    'El correo no es válido'
  ],
  password: [(value) => value.length > 5, 'La contraseña debe de tener al menos 6 caracteres.']
};

export const LoginPage = () => {
  const dispatch = useDispatch();
  const [formSubmitted, setformSubmitted] = useState(false);

  const { status, errorMessage } = useSelector((state) => state.auth);
  const isAuthenticating = useMemo(() => status === 'checking', [status]);

  const { email, password, onInputChange, formState, isFormValid, emailValid, passwordValid } =
    useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    if (!isFormValid) return;

    setformSubmitted(true);
    dispatch(startLoginWithEmailAndPassword(formState));
  };

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit} className="animate__animated animate__fadeIn animate__faster">
        <Grid container>
          <Grid item xs={12} sx={{ mt: 1 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={emailValid && formSubmitted}
              helperText={emailValid}
            ></TextField>
          </Grid>
          <Grid item xs={12} sx={{ mt: 1 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="********"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error={passwordValid && formSubmitted}
              helperText={passwordValid}
            ></TextField>
          </Grid>
          <Grid item xs={12} sx={{ mt: 1 }} display={errorMessage ? '' : 'none'}>
            <Alert severity="error">{errorMessage}</Alert>
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button disabled={isAuthenticating} type="submit" variant="contained" fullWidth>
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                disabled={isAuthenticating}
                variant="contained"
                fullWidth
                onClick={onGoogleSignIn}
              >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
