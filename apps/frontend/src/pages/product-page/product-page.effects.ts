import { useParams } from "react-router-dom";
import { usePurchasesControllerFindOne } from '@energyweb/zero-protocol-labs-api-client'

export const useProductPageEffects = () => {
  const { productId } = useParams();

  const { data, isLoading, isFetched } = usePurchasesControllerFindOne(productId);

  return { data, isLoading, isFetched };
}
