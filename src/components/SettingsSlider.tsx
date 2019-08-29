import React from 'react';
import { Slider, Theme, Box } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/styles';
import { ingredientMetadata } from '../constants/saladIngredients';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      marginBottom: theme.spacing(2),
    },
  }),
);

type Props = {
  settings: ISingleOption;
  type: string;
  onChange: (type: string, value: number | number[]) => void;
};

const SettingsSlider: React.FC<Props> = ({ settings, type, onChange }) => {
  const classes = useStyles();
  const { amount, enabled } = settings;
  const disabled = !enabled;

  const sendValueToParent = (
    event: React.ChangeEvent<{}>,
    value: number | number[],
  ) => {
    onChange(type, value);
  };

  return (
    <Box className={classes.root}>
      {Object.keys(ingredientMetadata).includes(type) && (
        <Slider
          onChangeCommitted={sendValueToParent}
          min={1}
          max={ingredientMetadata[type].amount}
          step={1}
          defaultValue={amount}
          valueLabelDisplay="auto"
          disabled={disabled}
        />
      )}
    </Box>
  );
};

export default SettingsSlider;
