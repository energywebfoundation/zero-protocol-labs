import styled from '@emotion/styled';
import { Container } from '@material-ui/core';
import { Navigate, Route, Routes } from 'react-router-dom';
import Header from '../components/header/header';
import ProductPage from '../pages/product-page/product-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import PurchasePage from '../pages/purchase-page/purchase-page';
import { ProductOfferPage } from 'pages/product-offer-page/product-offer-page';

import { useAxiosDefaults } from '../hooks';

const StyledApp = styled.div`
  background-color: #f6f3f9;
  min-height: 100vh;
`;

export const App = () => {
  useAxiosDefaults();
  return (
    <StyledApp>
      <Header />
      <main>
        <Container maxWidth={'xl'}>
          <Routes>
            <Route
              path={'/partners/filecoin/purchases/:productId'}
              element={<ProductPage />}
            />
            <Route
              path={'/partners/filecoin/nodes/:productId/transactions'}
              element={<PurchasePage />}
            />
            <Route
              path={'/crypto-journey/:productId'}
              element={<ProductOfferPage />}
            />
            <Route path={'/404'} element={<NotFoundPage />} />
            <Route path={'*'} element={<Navigate to={'/404'} />} />
          </Routes>
        </Container>
      </main>
    </StyledApp>
  );
};

export default App;
