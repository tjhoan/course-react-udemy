import { useEffect, useState } from "react";

const localCache = {};

export const useFetch = (url) => {
  const [state, setstate] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    errorMessage: null
  });

  useEffect(() => {
    getFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    if (localCache[url]) {
      console.log("Usando caché");
      setstate({
        data: localCache[url],
        isLoading: false,
        hasError: false,
        errorMessage: null
      });
      return;
    }

    setLoadingState();
    const resp = await fetch(url);

    await new Promise((resolve) => setTimeout(resolve, 700));

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
    
    // Manejo del caché
    localCache[url] = data;
    console.log("Cache actual:", localCache);
  };

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError
  };
};
