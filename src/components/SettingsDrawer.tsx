import React, { useEffect, useState } from 'react';
import {
  makeStyles,
  Theme,
  createStyles,
  ListSubheader,
  List,
} from '@material-ui/core';
import ReusableDrawer from './ReusableDrawer';
import SettingsSwitch from './SettingsSwitch';
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

  const getSaladSettings = () =>
    settings.getSettings().then((response) => {
      setSaladSettings(response);
    });

  const saveSaladSettings = (data: IUserOptions = saladSettings) =>
    settings.saveSettings(data);

  useEffect(() => {
    getSaladSettings();
  }, []);

  const onChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = event.currentTarget;
    const updatedSettings = JSON.parse(JSON.stringify(saladSettings));

    updatedSettings[value].enabled = checked;

    setSaladSettings(updatedSettings);
    saveSaladSettings(updatedSettings);
  };

  return (
    <ReusableDrawer
      icon={<SettingsIcon className={classes.iconLeft} />}
      label="Settings"
    >
      <List
        className={classes.list}
        subheader={<ListSubheader>Salad Settings</ListSubheader>}
      >
        {saladSettings &&
          Object.keys(saladSettings).map((key) => (
            <SettingsSwitch
              key={key}
              onChange={onChange}
              settings={saladSettings[key]}
            >
              {key}
            </SettingsSwitch>
          ))}
      </List>
    </ReusableDrawer>
  );
};

export default SettingsDrawer;
