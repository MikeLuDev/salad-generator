import React, { Fragment } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {
  ListSubheader,
  List,
  Drawer,
  Button,
} from '@material-ui/core';
import ListItemSwitch from './ListItemSwitch';
import saladIngredients from '../constants/saladIngredients';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
    button: {
      margin: theme.spacing(1),
    },
    listHeading: {
      marginLeft: theme.spacing(2),
      marginTop: theme.spacing(2),
    }
  })
);

const SettingsDrawer = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  type DrawerSide = 'top' | 'left' | 'bottom' | 'right';
  const toggleDrawer = (side: DrawerSide, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) return;

    setState({ ...state, [side]: open });
  };

  /** @todo Extract this and allow it to be populated as a child */
  const ingredientsToggleList = (side: DrawerSide) => (
    <div
      className={classes.list}
      role="presentation"
    >
      <List subheader={<ListSubheader>Salad Settings</ListSubheader>}>
        {Object.keys(saladIngredients).map(ingredient => (
          <ListItemSwitch>{ingredient}</ListItemSwitch>
        ))}
      </List>
    </div>
  );

  return (
    <Fragment>
      <Button
        className={classes.button}
        color="secondary"
        variant="contained"
        onClick={toggleDrawer('left', true)}
      >
        { /** @todo Allow for this to be an svg */}
        Settings
      </Button>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {ingredientsToggleList('left')}
      </Drawer>
    </Fragment>
  );
}

export default SettingsDrawer;
