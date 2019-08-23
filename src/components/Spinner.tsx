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
  List,
  ListItem,
} from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/styles';
import RefreshIcon from '@material-ui/icons/Refresh';

import spinSalad from '../js/spinSalad';
import SettingsDrawer from './SettingsDrawer';

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
  }),
);

const Spinner: React.FC = () => {
  const classes = useStyles();
  const [salad, setSalad] = useState<ISalad | null>(null);

  const getSalad = async () => {
    const newSalad = await spinSalad();
    setSalad(newSalad);
  };

  console.log(salad);

  return (
    <Box textAlign="center">
      <SettingsDrawer />
      <Button
        className={classes.button}
        onClick={getSalad}
        color="primary"
        variant="contained"
      >
        <RefreshIcon className={classes.iconLeft} />
        New Salad
      </Button>
      {!salad && (
        <Typography className={classes.table} variant="body1">
          Hit the button above to start making salads!
        </Typography>
      )}
      {salad && (
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
                    <TableRow>
                      <TableCell>{key}</TableCell>
                      <TableCell>
                        <List>
                          {ingredients.map((item) => (
                            <ListItem>{item}</ListItem>
                          ))}
                        </List>
                      </TableCell>
                    </TableRow>
                  );
                }
              })}
            </TableBody>
          </Table>
        </Paper>
      )}
    </Box>
  );
};

export default Spinner;
