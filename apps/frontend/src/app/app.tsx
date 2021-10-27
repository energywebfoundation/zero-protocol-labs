import styled from '@emotion/styled';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Header } from '../components/header/header';
import ProductPage from '../pages/product-page/product-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import PurchasePage from '../pages/purchase-page/purchase-page';
import { WizardPage } from '../pages/wizard-page/WizardPage';
import { WelcomePage } from '../pages/welcome-page/welcome-page';
import { AddressMappingProvider, SelectedProtocolProvider } from '../context';
import WizardThankPage from '../pages/wizard-thank-page/wizard-thank-page';
import { useAxiosDefaults } from '../hooks';

const StyledDiv = styled.div`
  background-color: #f6f3f9;
`;

export const App = () => {
  useAxiosDefaults();
  return (
    <SelectedProtocolProvider>
      <StyledDiv>
        <Header />
        <main>
          <Routes>
          <Route path={'/'} element={<WelcomePage />} />
            <Route
              path={'/partners/filecoin/purchases/:productId'}
              element={<ProductPage />}
            />
            <Route
              path={'/partners/filecoin/nodes/:productId/transactions'}
              element={<PurchasePage />}
            />
            <Route
              path={'/wizard'}
              element={
                <AddressMappingProvider>
                  <WizardPage />
                </AddressMappingProvider>
              }
            />
            <Route path={'/welcome'} element={<WelcomePage />} />
            <Route path={'/wizard/thank-you'} element={<WizardThankPage />} />
            <Route path={'/404'} element={<NotFoundPage />} />
            <Route path={'*'} element={<Navigate to={'/welcome'} />} />
          </Routes>
        </main>
      </StyledDiv>
    </SelectedProtocolProvider>
  );
};

export default App;
