import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter } from 'react-router-dom';
import './assets/fonts/rajdhani/stylesheet.css';
import App from './app/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { HelmetProvider } from 'react-helmet-async';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.render(
  <StrictMode>
    <CssBaseline />
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </HelmetProvider>
  </StrictMode>,
  document.getElementById('root')
);
