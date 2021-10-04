import styled from '@emotion/styled';

import { Navigate, Route, Routes } from 'react-router-dom';
import ProductPage from '../pages/product-page/product-page';
import Header from '../components/header/header';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import PurchasePage from '../pages/purchase-page/purchase-page';
import WizardPage from '../pages/wizard-page/wizard-page';
import { UiTheme } from 'libs/ui/theme/src';
import { Provider } from 'react-redux';
import { store } from '../store/store';

const StyledApp = styled.div`
  background-color: #f6f3f9;
`;

export const App = () => (
  <Provider store={store}>
    <StyledApp>
      <Header />
      <main>
        <UiTheme>
          <Routes>
            <Route
              path={'/partners/filecoin/purchases/:productId'}
              element={<ProductPage />}
            />
            <Route
              path={'/partners/filecoin/nodes/:productId/transactions'}
              element={<PurchasePage />}
            />
            <Route path={'/wizard'} element={<WizardPage />} />
            <Route path={'/404'} element={<NotFoundPage />} />
            <Route path={'*'} element={<Navigate to={'/404'} />} />
          </Routes>
        </UiTheme>
      </main>
    </StyledApp>
  </Provider>
);

export default App;
