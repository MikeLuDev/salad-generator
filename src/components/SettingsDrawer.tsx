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

  const [ingredientSettings, setIngredientSettings] = useState<IUserOptions>(
    defaultSettings,
  );
  const stringifiedIngredientSettings = JSON.stringify(ingredientSettings);

  const getIngredientSettings = () =>
    settings.ingredientSettings.getIngredientSettings().then((response) => {
      setIngredientSettings(response as IUserOptions);
    });

  const saveIngredientSettings = (data: IUserOptions = ingredientSettings) =>
    settings.ingredientSettings.saveIngredientSettings(data);

  useEffect(() => {
    getIngredientSettings();
  }, [stringifiedIngredientSettings]);

  const onSwitchChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = event.currentTarget;
    const settingsCopy = JSON.parse(stringifiedIngredientSettings);

    settingsCopy[value].enabled = checked;

    setIngredientSettings(settingsCopy);
    saveIngredientSettings(settingsCopy);
  };

  const onSliderChange = async (type: string, value: number | number[]) => {
    const settingsCopy = JSON.parse(stringifiedIngredientSettings);

    settingsCopy[type].amount = value;

    setIngredientSettings(settingsCopy);
    saveIngredientSettings(settingsCopy);
  };

  return (
    <ReusableDrawer
      icon={<SettingsIcon className={classes.iconLeft} />}
      label="Ingredients"
    >
      <List
        className={classes.list}
        subheader={
          <ListSubheader color="inherit" disableSticky>
            Salad Settings
          </ListSubheader>
        }
      >
        <Divider />
        {ingredientSettings &&
          Object.keys(ingredientSettings).map((key) => (
            <Fragment key={`settings-fragment-${key}`}>
              <SettingsSwitch
                value={key}
                onChange={onSwitchChange}
                settings={ingredientSettings[key]}
              >
                {`${key} (${ingredientSettings[key].amount})`}
              </SettingsSwitch>
              <SettingsSlider
                onChange={onSliderChange}
                type={key}
                settings={ingredientSettings[key]}
              />
              <Divider />
            </Fragment>
          ))}
      </List>
    </ReusableDrawer>
  );
};

export default SettingsDrawer;
