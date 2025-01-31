import {
  startLoginWithEmailAndPassword,
  checkingAuthentication,
  startGoogleSignIn,
  startLogout,
  startCreatingUserWithEmailAndPassword
} from '../../../src/store/auth/thunks';

import { checkingCredentials, login, logout } from '../../../src/store/auth/authSlice';
import {
  loginWithEmailAndPassword,
  logoutFirebase,
  registerUserWithEmailAndPassword,
  SignInWithGoogle
} from '../../../src/firebase/providers';
import { demoUser } from '../../fixtures/authFixtures';
import { clearNotesLogout } from '../../../src/store/journal/auth';

jest.mock('../../../src/firebase/providers');

describe('Pruebas en AuthThunks', () => {
  const dispatch = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test('Debe invocar el checkingCredentials', async () => {
    await checkingAuthentication()(dispatch);
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
  });

  test('startGoogleSignIn debe llamar checkingCredencials y login - Exito', async () => {
    const loginData = { ok: true, ...demoUser };
    await SignInWithGoogle.mockResolvedValue(loginData);

    await startGoogleSignIn()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(login(loginData));
  });

  test('startCreatingUserWithEmailAndPassword debe crear un usuario y usar el login', async () => {
    const formData = {
      email: demoUser.email,
      password: '123456',
      displayName: demoUser.displayName
    };

    registerUserWithEmailAndPassword.mockResolvedValue({
      ok: true,
      uid: '123ABC',
      email: demoUser.email,
      displayName: demoUser.displayName
    });

    await startCreatingUserWithEmailAndPassword(formData)(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(
      login({
        ok: true,
        uid: '123ABC',
        email: demoUser.email,
        displayName: demoUser.displayName
      })
    );
  });

  test('startGoogleSignIn debe llamar checkingCredencials y logout - Error', async () => {
    const loginData = { ok: false, errorMessage: 'Un error en Google' };
    await SignInWithGoogle.mockResolvedValue(loginData);

    await startGoogleSignIn()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(logout(loginData));
  });

  test('startLoginWithEmailAndPassword', async () => {
    const loginData = { ok: true, ...demoUser };
    const formData = { email: demoUser.email, password: '123456' };

    await loginWithEmailAndPassword.mockResolvedValue(loginData);

    await startLoginWithEmailAndPassword(formData)(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(login(loginData));
  });

  test('startLogout debe de llamar logoutFirebase, clearNotes y logout', async () => {
    await startLogout()(dispatch);

    expect(logoutFirebase).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith(clearNotesLogout());
    expect(dispatch).toHaveBeenCalledWith(logout());
  });
});
