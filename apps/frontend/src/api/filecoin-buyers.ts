/*
 * Generated by orval v5.4.12 🍺
 * Do not edit manually.
 * Energy Web Zero API
 * OpenAPI spec version: 0.3
 */
import {
  useQuery,
  useMutation,
  UseQueryOptions,
  UseMutationOptions
} from 'react-query'
import type {
  BuyerDto,
  CreateBuyerDto,
  UpdateBuyerDto
} from './energyWebZeroAPI.schemas'
import buyersControllerCreateMutator from '../response-type'
import buyersControllerFindAllMutator from '../response-type'
import buyersControllerFindOneMutator from '../response-type'
import buyersControllerUpdateMutator from '../response-type'
import buyersControllerRemoveMutator from '../response-type'


type AsyncReturnType<
T extends (...args: any) => Promise<any>,
U = unknown
> = T extends (...args: any) => Promise<infer R> ? (U extends R ? U : R) : any;


type SecondParameter<T extends (...args: any) => any> = T extends (
  config: any,
  args: infer P,
) => any
  ? P
  : never;

export const buyersControllerCreate = <TData = BuyerDto>(
    createBuyerDto: CreateBuyerDto,
 options?: SecondParameter<typeof buyersControllerCreateMutator>) => {
      return buyersControllerCreateMutator<TData>(
      {url: `/api/partners/filecoin/buyers`, method: 'post',
      data: createBuyerDto
    },
      // eslint-disable-next-line
// @ts-ignore
 options);
    }
  


    export const useBuyersControllerCreate = <TData = AsyncReturnType<typeof buyersControllerCreate,BuyerDto>,
    TError = unknown,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<TData, TError,{data: CreateBuyerDto}, TContext>, request?: SecondParameter<typeof buyersControllerCreateMutator>}
) => {
      const {mutation: mutationOptions, request: requestOptions} = options || {}

      return useMutation<TData, TError, {data: CreateBuyerDto}, TContext>((props) => {
        const {data} = props || {};

        return  buyersControllerCreate<TData>(data,requestOptions)
      }, mutationOptions)
    }
    export const buyersControllerFindAll = <TData = BuyerDto[]>(
    
 options?: SecondParameter<typeof buyersControllerFindAllMutator>) => {
      return buyersControllerFindAllMutator<TData>(
      {url: `/api/partners/filecoin/buyers`, method: 'get'
    },
      // eslint-disable-next-line
// @ts-ignore
 options);
    }
  

export const getBuyersControllerFindAllQueryKey = () => [`/api/partners/filecoin/buyers`]

    
export const useBuyersControllerFindAll = <TQueryFnData = AsyncReturnType<typeof buyersControllerFindAll, BuyerDto[]>, TError = unknown, TData = TQueryFnData>(
  options?: { query?:UseQueryOptions<TQueryFnData, TError, TData>, request?: SecondParameter<typeof buyersControllerFindAllMutator>}

  ) => {

  const {query: queryOptions, request: requestOptions} = options || {}

  const queryKey = queryOptions?.queryKey ?? getBuyersControllerFindAllQueryKey();

  const query = useQuery<TQueryFnData, TError, TData>(queryKey, () => buyersControllerFindAll<TQueryFnData>(requestOptions), queryOptions )

  return {
    queryKey,
    ...query
  }
}

export const buyersControllerFindOne = <TData = BuyerDto>(
    id: string,
 options?: SecondParameter<typeof buyersControllerFindOneMutator>) => {
      return buyersControllerFindOneMutator<TData>(
      {url: `/api/partners/filecoin/buyers/${id}`, method: 'get'
    },
      // eslint-disable-next-line
// @ts-ignore
 options);
    }
  

export const getBuyersControllerFindOneQueryKey = (id: string,) => [`/api/partners/filecoin/buyers/${id}`]

    
export const useBuyersControllerFindOne = <TQueryFnData = AsyncReturnType<typeof buyersControllerFindOne, BuyerDto>, TError = unknown, TData = TQueryFnData>(
 id: string, options?: { query?:UseQueryOptions<TQueryFnData, TError, TData>, request?: SecondParameter<typeof buyersControllerFindOneMutator>}

  ) => {

  const {query: queryOptions, request: requestOptions} = options || {}

  const queryKey = queryOptions?.queryKey ?? getBuyersControllerFindOneQueryKey(id);

  const query = useQuery<TQueryFnData, TError, TData>(queryKey, () => buyersControllerFindOne<TQueryFnData>(id, requestOptions), {enabled: !!(id), ...queryOptions} )

  return {
    queryKey,
    ...query
  }
}

export const buyersControllerUpdate = <TData = BuyerDto>(
    id: string,
    updateBuyerDto: UpdateBuyerDto,
 options?: SecondParameter<typeof buyersControllerUpdateMutator>) => {
      return buyersControllerUpdateMutator<TData>(
      {url: `/api/partners/filecoin/buyers/${id}`, method: 'patch',
      data: updateBuyerDto
    },
      // eslint-disable-next-line
// @ts-ignore
 options);
    }
  


    export const useBuyersControllerUpdate = <TData = AsyncReturnType<typeof buyersControllerUpdate,BuyerDto>,
    TError = unknown,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<TData, TError,{id: string;data: UpdateBuyerDto}, TContext>, request?: SecondParameter<typeof buyersControllerUpdateMutator>}
) => {
      const {mutation: mutationOptions, request: requestOptions} = options || {}

      return useMutation<TData, TError, {id: string;data: UpdateBuyerDto}, TContext>((props) => {
        const {id,data} = props || {};

        return  buyersControllerUpdate<TData>(id,data,requestOptions)
      }, mutationOptions)
    }
    export const buyersControllerRemove = <TData = BuyerDto>(
    id: string,
 options?: SecondParameter<typeof buyersControllerRemoveMutator>) => {
      return buyersControllerRemoveMutator<TData>(
      {url: `/api/partners/filecoin/buyers/${id}`, method: 'delete'
    },
      // eslint-disable-next-line
// @ts-ignore
 options);
    }
  


    export const useBuyersControllerRemove = <TData = AsyncReturnType<typeof buyersControllerRemove,BuyerDto>,
    TError = unknown,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<TData, TError,{id: string}, TContext>, request?: SecondParameter<typeof buyersControllerRemoveMutator>}
) => {
      const {mutation: mutationOptions, request: requestOptions} = options || {}

      return useMutation<TData, TError, {id: string}, TContext>((props) => {
        const {id} = props || {};

        return  buyersControllerRemove<TData>(id,requestOptions)
      }, mutationOptions)
    }
    