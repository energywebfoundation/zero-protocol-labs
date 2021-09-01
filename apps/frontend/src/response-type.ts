import axios, { AxiosRequestConfig } from 'axios';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const env = require('../bin/env-config.json');
export const getWithResponseType = <T>(
  config: AxiosRequestConfig
): Promise<T> => {
  const source = axios.CancelToken.source();
  const promise = axios({
    ...config,
    baseURL: env.API_BASE_URL,
    cancelToken: source.token,
  }).then(({ data }) => data);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  promise.cancel = () => {
    source.cancel('Query was cancelled by React Query');
  };

  return promise;
};

export default getWithResponseType;
