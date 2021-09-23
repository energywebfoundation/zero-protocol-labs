import { useNavigate, useParams } from 'react-router-dom';
import { usePurchasesControllerFindOne } from '../../api';
import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

export const usePurchasePageEffects = () => {
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
          axios.defaults.baseURL = 'http://localhost:3333';
          setIsBaseUrlSet(true);
        });
    }
  });
  const { purchaseId } = useParams();
  const { isError, error, isFetching, isFetched, isIdle, data } =
    usePurchasesControllerFindOne(purchaseId, {
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
