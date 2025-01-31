export const initialState = {
  status: 'checking',
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null
};

export const authenticatedState = {
  status: 'authenticated',
  uid: '123',
  email: 'correo@gmail.com',
  displayName: 'jhoe doe',
  photoURL: 'https://foto.jpg',
  errorMessage: null
};

export const notAuthenticatedState = {
  status: 'not-authenticated',
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null
};

export const demoUser = {
  uid: '123',
  email: 'correo@gmail.com',
  displayName: 'Demo User',
  photoURL: 'https://demo/foto.jpg'
}