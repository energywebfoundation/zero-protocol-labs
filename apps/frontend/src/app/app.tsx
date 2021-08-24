import styled from '@emotion/styled';

import { ReactComponent as Logo } from './logo.svg';
import star from './star.svg';

import { Route,  } from 'react-router-dom';

const StyledApp = styled.div`
`;

export function App() {
  return (
    <StyledApp>
      <header>
        <Logo width="75" height="75" />
      </header>
      <main>
        <h1>Welcome to frontend!</h1>
      </main>

    </StyledApp>
  );
}

export default App;
