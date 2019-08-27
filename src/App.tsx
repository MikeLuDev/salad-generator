import React from 'react';

import { ThemeProvider, makeStyles } from '@material-ui/styles';
import { createMuiTheme, Container, Typography } from '@material-ui/core';
import { green } from '@material-ui/core/colors';

import Header from './components/Header';
import Spinner from './components/Spinner';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[600],
    },
  },
  spacing: 8,
});

const useStyles = makeStyles({
  root: {
    padding: '16px',
  },
  h1: {
    textAlign: 'center',
    fontSize: '48px',
    marginBottom: theme.spacing(2),
  },
});

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container className={classes.root} maxWidth="sm">
        <Typography className={classes.h1} variant="h1">
          Salad Generator
        </Typography>
        <Spinner />
      </Container>
    </ThemeProvider>
  );
};

export default App;
