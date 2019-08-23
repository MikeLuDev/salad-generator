import React, { useEffect, useState } from 'react';
import {
  makeStyles,
  Theme,
  createStyles,
  ListSubheader,
  List,
} from '@material-ui/core';
import ReusableDrawer from './ReusableDrawer';
import ListItemSwitch from './ListItemSwitch';
import saladIngredients from '../constants/saladIngredients';
import SettingsIcon from '@material-ui/icons/Settings';
import settings from '../js/settings';
import defaultSettings from '../constants/defaultSettings';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      width: 250,
    },
    iconLeft: {
      marginRight: theme.spacing(1),
    },
  }),
);

const SettingsDrawer: React.FC = () => {
  const classes = useStyles();

  const [saladSettings, setSaladSettings] = useState<IUserOptions>(
    defaultSettings,
  );
  useEffect(() => {
    const getSaladSettings = () =>
      settings.getSettings().then((response) => setSaladSettings(response));

    getSaladSettings();
  }, [saladSettings]);

  return (
    <ReusableDrawer
      icon={<SettingsIcon className={classes.iconLeft} />}
      label="Settings"
    >
      <List
        className={classes.list}
        subheader={<ListSubheader>Salad Settings</ListSubheader>}
      >
        {Object.keys(saladIngredients).map((ingredient) => (
          <ListItemSwitch>{ingredient}</ListItemSwitch>
        ))}
      </List>
    </ReusableDrawer>
  );
};

export default SettingsDrawer;
