import React from 'react';
import {
  AppBar,
  Typography,
  Toolbar,
  Container,
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginBottom: theme.spacing(2),
    },
    h1: {
      fontSize: '20px',
      fontWeight: 500,
    },
  }),
);

const Header: React.FC = () => {
  const classes = useStyles();
  /* const [anchorEl, setAnchorEl] = React.useState<Element | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget as Element);
  const handleClose = () => setAnchorEl(null); */

  return (
    <AppBar className={classes.root} color="primary" position="static">
      <Toolbar>
        <Container style={{ textAlign: 'center' }} maxWidth="sm">
          <Typography className={classes.h1} variant="h1">
            Salad Generator
          </Typography>
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
