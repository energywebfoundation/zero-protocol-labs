import { useNavigate, useParams } from 'react-router-dom';
import { usePurchasesControllerFindOne } from '../../api';
import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

export const useProductPageEffects = () => {
  const [isBaseUrlSet, setIsBaseUrlSet] = useState(false);
  useEffect(() => {
    if (!axios.defaults.baseURL) {
      axios
        .get('env-config.json')
        .then((value: AxiosResponse<{ API_BASE_URL: string }>) => {
          axios.defaults.baseURL = value.data.API_BASE_URL;
          setIsBaseUrlSet(true);
        })
        .catch((reason) => {});
    }
  });
  const { productId } = useParams();
  const { isError, error, isFetching, isFetched, isIdle, data } =
    usePurchasesControllerFindOne(productId, {
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
