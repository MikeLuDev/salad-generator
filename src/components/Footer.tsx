import React from 'react';
import { makeStyles, createStyles } from '@material-ui/styles';
import { Theme, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      textAlign: 'center',
      marginTop: 'auto',
      padding: theme.spacing(2),
      borderTop: '1px solid rgba(0, 0, 0, 0.12)',
    },
  }),
);

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography variant="body1">Made by Michael Lu</Typography>
      <Typography variant="body1">
        View the source code on{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/MikeLuDev/salad-generator"
        >
          Github
        </a>
      </Typography>
    </footer>
  );
};

export default Footer;
