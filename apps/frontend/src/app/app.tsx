import styled from '@emotion/styled';

import { Navigate, Route, Routes } from 'react-router-dom';
import ProductPage from '../pages/product-page/product-page';
import { Container } from '@material-ui/core';
import Header from '../components/header/header';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import React from 'react';

const StyledApp = styled.div`
  background-color: #f6f3f9;
`;

export const App = () => (
  <StyledApp>
    <Header />
    <main>
      <Container maxWidth={'xl'}>
        <Routes>
          <Route
            path={'/partners/filecoin/purchases/:productId'}
            element={<ProductPage />}
          />
          <Route path={'/404'} element={<NotFoundPage />} />
          <Route path={'*'} element={<Navigate to={'/404'} />} />
        </Routes>
      </Container>
    </main>
  </StyledApp>
);

export default App;
