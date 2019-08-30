import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import {
  Box,
  Typography,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Theme,
} from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/styles';
import RefreshIcon from '@material-ui/icons/Refresh';

import spinSalad from '../js/spinSalad';
import SettingsDrawer from './SettingsDrawer';
import util from '../js/util';
import DietaryDrawer from './DietaryDrawer';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    table: {
      marginBottom: theme.spacing(2),
      marginTop: theme.spacing(2),
    },
    button: {
      margin: theme.spacing(1),
    },
    iconLeft: {
      marginRight: theme.spacing(1),
    },
    root: {
      padding: theme.spacing(2, 0, 2, 0),
      textAlign: 'center',
    },
  }),
);

const Spinner: React.FC = () => {
  const classes = useStyles();
  const [salad, setSalad] = useState<ISalad | null>(null);

  const getSalad = async () => {
    const newSalad = await spinSalad();
    setSalad(newSalad);
  };

  return (
    <Box className={classes.root}>
      <SettingsDrawer />
      <DietaryDrawer />
      <Button
        className={classes.button}
        onClick={getSalad}
        color="primary"
        variant="contained"
      >
        <RefreshIcon className={classes.iconLeft} />
        New Salad
      </Button>
      {salad ? (
        <Paper className={classes.table}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Category</TableCell>
                <TableCell>Ingredients</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.keys(salad).map((key) => {
                if (salad[key] !== undefined) {
                  const ingredients = salad[key]!;
                  return (
                    <TableRow key={key}>
                      <TableCell>
                        <Typography variant="body1">
                          {util.capitalizeFirstLetter(key)}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        {ingredients.map((item) => (
                          <Typography variant="body1" key={`${key}-${item}`}>
                            {util.capitalizeFirstLetter(item)}
                          </Typography>
                        ))}
                      </TableCell>
                    </TableRow>
                  );
                } else return null;
              })}
            </TableBody>
          </Table>
        </Paper>
      ) : (
        <Typography className={classes.table} variant="body1">
          Hit the button above to start making salads!
        </Typography>
      )}
    </Box>
  );
};

export default Spinner;
