import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile
} from 'firebase/auth';
import { FirebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();

const errorMessages = {
  'auth/email-already-in-use': 'El correo está en uso',
  'auth/invalid-credential': 'Las credenciales no son válidas'
};

export const SignInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    const { displayName, email, photoURL, uid } = result.user;

    await updateProfile(FirebaseAuth.currentUser, {
      displayName
    });

    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid
    };
  } catch (error) {
    return {
      ok: false,
      errorMessage: errorMessages[error.code] || error.message
    };
  }
};

export const registerUserWithEmailAndPassword = async ({ email, password, displayName }) => {
  try {
    const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
    const { uid, photoURL } = resp.user;

    await updateProfile(resp.user, {
      displayName
    });

    return {
      ok: true,
      uid,
      displayName,
      email,
      photoURL
    };
  } catch (error) {
    return {
      ok: false,
      errorMessage: errorMessages[error.code] || error.message
    };
  }
};

export const loginWithEmailAndPassword = async ({ email, password }) => {
  try {
    const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);
    const { photoURL, uid, displayName } = resp.user;

    return {
      ok: true,
      uid,
      photoURL,
      displayName
    };
  } catch (error) {
    return {
      ok: false,
      errorMessage: errorMessages[error.code] || error.message
    };
  }
};

export const logoutFirebase = async () => {
  return await FirebaseAuth.signOut();
};
