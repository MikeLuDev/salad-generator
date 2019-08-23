import React from 'react';
import {
  AppBar,
  Typography,
  Toolbar,
  IconButton,
  MenuItem,
  Menu,
  Container,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<Element | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget as Element);
  const handleClose = () => setAnchorEl(null);

  return (
    <AppBar color="primary" position="static">
      <Toolbar>
        <Container style={{ textAlign: 'center' }} maxWidth="md">
          <Typography variant="h6">Salad Generator</Typography>
        </Container>
        {/*  <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="main-menu"
          anchorEl={anchorEl}
          keepMounted
          open={!!anchorEl}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Settings</MenuItem>
          <MenuItem onClick={handleClose}>Other Place</MenuItem>
          <MenuItem onClick={handleClose}>Somewhere Else</MenuItem>
        </Menu> */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
