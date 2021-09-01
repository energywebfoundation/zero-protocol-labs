import { useNavigate, useParams } from 'react-router-dom';
import { usePurchasesControllerFindOne } from '../../api';
import { useEffect } from 'react';

export const useProductPageEffects = () => {
  const { productId } = useParams();
  const { isError, error, isFetching, isFetched, isIdle, data } =
    usePurchasesControllerFindOne(productId);
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
