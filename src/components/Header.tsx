import React from 'react';
import {
  AppBar,
  Typography,
  Toolbar,
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    h1: {
      fontSize: '20px',
      fontWeight: 500,
    },
    toolbar: {
      display: 'flex',
      justifyContent: 'center',
    },
  }),
);

const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <AppBar color="primary" position="static">
      <Toolbar className={classes.toolbar}>
        <Typography className={classes.h1} variant="h1">
          Salad Generator
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
