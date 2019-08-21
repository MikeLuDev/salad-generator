import React, { Fragment, ReactNode } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Drawer, Button } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
  }),
);

type Props = {
  label: string,
  icon: ReactNode,
};

const ReusableDrawer: React.FC<Props> = ({ children, label, icon, }) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });
  type DrawerSide = 'left';

  const toggleDrawer = (side: DrawerSide, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    )
      return;

    setState({ ...state, [side]: open });
  };

  return (
    <Fragment>
      <Button
        className={classes.button}
        color="secondary"
        variant="contained"
        onClick={toggleDrawer('left', true)}
      >
        {icon}
        {label}
      </Button>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {children}
      </Drawer>
    </Fragment>
  );
};

export default ReusableDrawer;