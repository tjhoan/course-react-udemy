import { useEffect, useState } from 'react';

export const useFetch = url => {
  const [state, setstate] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    errorMessage: null
  });

  useEffect(() => {
    getFetch();
  }, [url]);

  const setLoadingState = () => {
    setstate({
      data: null,
      isLoading: true,
      hasError: false,
      errorMessage: null
    }); 
  };

  const getFetch = async () => {
    setLoadingState();
    const resp = await fetch(url);

    if (!resp.ok) {
      setstate({
        data: null,
        isLoading: false,
        hasError: true,
        errorMessage: {
          code: resp.status,
          message: resp.statusText
        }
      });
      return;
    }

    const data = await resp.json();
    setstate({
      data,
      isLoading: false,
      hasError: false,
      errorMessage: null
    });
  };

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError
  };
};
