import React from 'react';

import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme, Container } from '@material-ui/core';
import { green } from '@material-ui/core/colors';

import Header from './components/Header';
import Spinner from './components/Spinner';

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: green[500],
    },
  },
});

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Header />
    <Container maxWidth="md">
      <Spinner />
    </Container>
  </ThemeProvider>
);

export default App;
