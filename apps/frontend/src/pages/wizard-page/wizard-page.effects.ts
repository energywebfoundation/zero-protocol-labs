import { OrderDto, ordersControllerCreate } from "@energyweb/zero-protocol-labs-api-client";


export const useOrderPageEffects = async(dto:OrderDto) => {
  const data =await ordersControllerCreate(dto)
 return { data };
}
