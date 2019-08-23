import React, { useEffect, useState, Fragment } from 'react';
import {
  makeStyles,
  Theme,
  createStyles,
  ListSubheader,
  List,
  Divider,
} from '@material-ui/core';
import ReusableDrawer from './ReusableDrawer';
import SettingsSwitch from './SettingsSwitch';
import SettingsIcon from '@material-ui/icons/Settings';
import settings from '../js/settings';
import defaultSettings from '../constants/defaultSettings';
import SettingsSlider from './SettingsSlider';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      width: 300,
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

  const onSwitchChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = event.currentTarget;
    const settingsCopy = JSON.parse(JSON.stringify(saladSettings));

    settingsCopy[value].enabled = checked;

    setSaladSettings(settingsCopy);
    saveSaladSettings(settingsCopy);
  };

  const onSliderChange = async (type: string, value: number | number[]) => {
    const settingsCopy = JSON.parse(JSON.stringify(saladSettings));

    settingsCopy[type].amount = value;

    setSaladSettings(settingsCopy);
    saveSaladSettings(settingsCopy);
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
        <Divider />
        {saladSettings &&
          Object.keys(saladSettings).map((key) => (
            <Fragment key={`settings-fragment-${key}`}>
              <SettingsSwitch
                onChange={onSwitchChange}
                settings={saladSettings[key]}
              >
                {key}
              </SettingsSwitch>
              <SettingsSlider
                onChange={onSliderChange}
                type={key}
                settings={saladSettings[key]}
              />
              <Divider />
            </Fragment>
          ))}
      </List>
    </ReusableDrawer>
  );
};

export default SettingsDrawer;
