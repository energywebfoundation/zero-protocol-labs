import axios from 'axios';

declare global {
  interface Window {
    config: {
      API_HOST_URL: string;
    };
  }
}

export const useAxiosDefaults = () => {
  axios.defaults.baseURL = window.config.API_HOST_URL;
};
