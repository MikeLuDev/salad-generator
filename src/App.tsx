import React from 'react';

import { ThemeProvider, makeStyles } from '@material-ui/styles';
import { createMuiTheme, Container } from '@material-ui/core';
import { green } from '@material-ui/core/colors';

import Header from './components/Header';
import Spinner from './components/Spinner';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[600],
    },
  },
});

const useStyles = makeStyles({
  root: {
    padding: '16px',
  },
});

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container className={classes.root}  maxWidth="md">
        <Spinner />
      </Container>
    </ThemeProvider>

  );
};

export default App;
