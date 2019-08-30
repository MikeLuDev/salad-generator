import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core';
import ReusableDrawer from './ReusableDrawer';
import SettingsIcon from '@material-ui/icons/Settings';
import DietarySettings from './DietarySettings';

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

const DietaryDrawer: React.FC = () => {
  const classes = useStyles();

  return (
    <ReusableDrawer
      icon={<SettingsIcon className={classes.iconLeft} />}
      label="Dietary"
    >
      <DietarySettings />
    </ReusableDrawer>
  );
};

export default DietaryDrawer;
