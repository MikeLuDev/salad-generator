import React from 'react';
import { AppBar, Typography, Toolbar } from '@material-ui/core';


const Header: React.FC = () => (
  <AppBar color="primary" position="static">
    <Toolbar>
      <Typography variant="h6">
        Salad Generator
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
