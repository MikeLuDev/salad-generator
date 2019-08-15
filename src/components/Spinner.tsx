import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import { Box, Typography, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import spinSalad from '../js/spinSalad';

const useStyles = makeStyles({
  table: {
    marginBottom: '16px',
  },
});

const Spinner: React.FC = () => {
  const classes = useStyles();
  const [salad, setSalad] = useState<ISalad | null>(null);
  
  const getSalad = () => {
    const newSalad = spinSalad();
    setSalad(newSalad);
  };

  return (
    <Box display="flex" flexDirection="column">
      { !salad && <Typography className={classes.table} variant="body1">Hit the button below to generate a salad!</Typography> }
      { salad && 
        <Paper className={classes.table}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Category
                </TableCell>
                <TableCell>
                  Ingredients
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  Greens
                </TableCell>
                <TableCell>
                  {salad.chosenGreens[0]}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Grains
                </TableCell>
                <TableCell>
                  {salad.chosenGrains[0]}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Veggies
                </TableCell>
                <TableCell>
                  {salad.chosenVeggies.map(veggie => `${veggie} `)}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Fruits
                </TableCell>
                <TableCell>
                  {salad.chosenFruits[0]}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Protein
                </TableCell>
                <TableCell>
                  {salad.chosenProteins[0]}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Cheese
                </TableCell>
                <TableCell>
                  {salad.chosenCheeses[0]}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Garnish
                </TableCell>
                <TableCell>
                  {salad.chosenGarnishes[0]}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
      </Paper> }
      <Button onClick={getSalad} color="primary" variant="contained">New Salad</Button>
    </Box>
  );
};

export default Spinner;
