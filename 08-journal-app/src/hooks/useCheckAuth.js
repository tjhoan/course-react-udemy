import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { startLoadingNotes } from '../store/journal/auth';
import { onAuthStateChanged } from 'firebase/auth';
import { FirebaseAuth } from '../firebase/config';
import { login, logout } from '../store/auth';

export const useCheckAuth = () => {
  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    // Con unsubscribe evitamos listeners duplicados
    const unsubscribe = onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(logout());

      const { uid, email, displayName, photoURL } = user;

      dispatch(login({ uid, email, displayName, photoURL }));
      dispatch(startLoadingNotes());
    });

    // Limpieza para evitar suscripciones duplicadas
    return () => unsubscribe();
  }, [dispatch]);

  return status;
};
