import React from 'react';

import { ThemeProvider, makeStyles } from '@material-ui/styles';
import { createMuiTheme, Container, Typography, Box } from '@material-ui/core';
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
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  footer: {
    textAlign: 'center',
    marginTop: 'auto',
    padding: theme.spacing(2),
  },
});

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Box className={classes.root}>
        <Header />
        <Container maxWidth="sm">
          <Spinner />
        </Container>
        <footer className={classes.footer}>
          <Typography variant="body1">Made by Michael Lu</Typography>
        </footer>
      </Box>
    </ThemeProvider>
  );
};

export default App;
