import React, { useState, useEffect } from 'react';
import {
  Box,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Theme,
  Radio,
  RadioGroup,
  Divider,
  Typography,
} from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/styles';
import { dietaryDefaultSettings } from '../constants/defaultSettings';
import settings from '../js/settings';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2, 2, 0, 2),
    },
    formControl: {
      width: '100%',
    },
    group: {
      paddingLeft: theme.spacing(2),
    },
    divider: {
      margin: theme.spacing(2, 0, 3, 0),
    },
    label: {
      marginBottom: theme.spacing(1),
    },
    warningText: {
      color: theme.palette.secondary.main,
      fontSize: '14px',
      maxWidth: '260px',
      textAlign: 'center',
      margin: theme.spacing(2, 0, 1, 0),
    },
  }),
);

const DietaryBoxes: React.FC = () => {
  const classes = useStyles();

  const [dietarySettings, setDietarySettings] = useState(
    dietaryDefaultSettings,
  );
  const stringifiedDietarySettings = JSON.stringify(dietarySettings);
  const stringifiedDefaultDietarySettings = JSON.stringify(
    dietaryDefaultSettings,
  );
  const { diet, dairyFree, glutenFree, lowCarb, soyFree } = dietarySettings;

  const getDietarySettings = () =>
    settings.dietarySettings.getDietarySettings().then((response) => {
      setDietarySettings(response as IDietaryOptions);
    });

  const saveDietarySettings = (data: IDietaryOptions = dietarySettings) =>
    settings.dietarySettings.saveDietarySettings(data);

  const hasDietaryNeeds =
    stringifiedDefaultDietarySettings !== stringifiedDietarySettings;

  useEffect(() => {
    getDietarySettings();
  }, [stringifiedDietarySettings]);

  const handleRadioChange = (event: React.ChangeEvent<unknown>) => {
    const { value } = event.target as HTMLInputElement;
    const settingsCopy = JSON.parse(stringifiedDietarySettings);

    settingsCopy.diet = value;

    setDietarySettings(settingsCopy);
    saveDietarySettings(settingsCopy);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = event.target;
    const settingsCopy = JSON.parse(stringifiedDietarySettings);

    settingsCopy[value] = checked;

    setDietarySettings(settingsCopy);
    saveDietarySettings(settingsCopy);
  };

  return (
    <Box className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel className={classes.label} component="legend">
          Dietary Restrictions
        </FormLabel>
        <RadioGroup
          value={diet}
          onChange={handleRadioChange}
          className={classes.group}
        >
          <FormControlLabel
            value="none"
            control={<Radio />}
            label="None (disabled)"
          />
          <FormControlLabel value="vegan" control={<Radio />} label="Vegan" />
          <FormControlLabel
            value="vegetarian"
            control={<Radio />}
            label="Vegetarian"
          />
          <FormControlLabel
            value="pescatarian"
            control={<Radio />}
            label="Pescetarian"
          />
        </RadioGroup>
        <Divider className={classes.divider} />

        <FormLabel className={classes.label} component="legend">
          Allergies/Other
        </FormLabel>
        <FormGroup className={classes.group}>
          <FormControlLabel
            control={
              <Checkbox
                checked={lowCarb}
                onChange={handleCheckboxChange}
                value="lowCarb"
              />
            }
            label="Low Carb"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={dairyFree}
                onChange={handleCheckboxChange}
                value="dairyFree"
              />
            }
            label="Dairy Free"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={soyFree}
                onChange={handleCheckboxChange}
                value="soyFree"
              />
            }
            label="Soy Free"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={glutenFree}
                onChange={handleCheckboxChange}
                value="glutenFree"
              />
            }
            label="Gluten Free"
          />
        </FormGroup>
      </FormControl>

      {hasDietaryNeeds && (
        <Typography className={classes.warningText}>
          Dietary settings will affect the number of available ingredients.
        </Typography>
      )}
    </Box>
  );
};

export default DietaryBoxes;
