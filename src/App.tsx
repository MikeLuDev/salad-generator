import React from 'react';
import styled from 'styled-components';

import Header from './components/Header';
import Spinner from './components/Spinner';

const App: React.FC = () => (
  <StyledApp className="App">
    <Header />
    <Spinner />
  </StyledApp>
);

const StyledApp = styled.div`
  height: 100vh;
  text-align: center;
  * {
    box-sizing: border-box;
  }
`;

export default App;
