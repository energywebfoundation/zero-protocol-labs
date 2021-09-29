import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

export const usePageEffects = (useControllerFind: any, Id?: string) => {
  const [isBaseUrlSet, setIsBaseUrlSet] = useState(false);
  useEffect(() => {
    if (!axios.defaults.baseURL) {
      axios
        .get('env-config.json')
        .then((value: AxiosResponse<{ API_BASE_URL: string }>) => {
          axios.defaults.baseURL = value.data.API_BASE_URL;
          setIsBaseUrlSet(true);
        })
        .catch((reason) => {
          axios.defaults.baseURL = process.env.NX_API_HOST_URL;
          setIsBaseUrlSet(true);
        });
    } else {
      setIsBaseUrlSet(true);
    }
  }, []);

  const { isError, error, isFetching, isFetched, isIdle, data } =
    useControllerFind(Id, {
      query: { enabled: isBaseUrlSet },
    });
  const navigate = useNavigate();
  useEffect(() => {
    if (isError) {
      navigate('/404');
    }
  }, [isError]);
  return {
    isError,
    error,
    data,
    isFetched,
    isFetching,
    isIdle,
  };
};
