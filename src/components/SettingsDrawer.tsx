import React from 'react';
import { makeStyles, Theme, createStyles, ListSubheader, List, } from '@material-ui/core';
import ReusableDrawer from './ReusableDrawer';
import ListItemSwitch from './ListItemSwitch';
import saladIngredients from '../constants/saladIngredients';
import SettingsIcon from '@material-ui/icons/Settings';

const useStyles = makeStyles((theme: Theme) => createStyles({
  list: {
    width: 250,
  },
  iconLeft: {
    marginRight: theme.spacing(1),
  },
}));

const ToggleIngredients: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.list} role="presentation">
      <List subheader={<ListSubheader>Salad Settings</ListSubheader>}>
        {Object.keys(saladIngredients).map((ingredient) => (
          <ListItemSwitch>{ingredient}</ListItemSwitch>
        ))}
      </List>
    </div>
  );
};

const SettingsDrawer: React.FC = () => {
  const classes = useStyles();

  return (
    <ReusableDrawer icon={<SettingsIcon className={classes.iconLeft} />} label="Settings">
      <ToggleIngredients />
    </ReusableDrawer>
  );
};

export default SettingsDrawer;
