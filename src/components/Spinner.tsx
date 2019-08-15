import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

import spinSalad from '../scripts/spinSalad';

type Salad = {
  chosenGreens: string[],
  chosenGrains: string[],
  chosenVeggies: string[],
  chosenFruits: string[],
  chosenProteins: string[],
  chosenCheeses: string[],
  chosenGarnishes: string[]
};

const Spinner: React.FC = () => {
  const [salad, setSalad] = useState<Salad | null>(null);
  
  const getSalad = () => {
    const newSalad = spinSalad();
    setSalad(newSalad);
  };

  return (
    <div>
      {salad ? 
        (<section>
          <Typography variant="body1">
            {`Greens: ${salad.chosenGreens[0]}`}
          </Typography>
          <p>
            {`Grain: ${salad.chosenGrains[0]}`}
          </p>
          <p>
            {`Veggies: ${salad.chosenVeggies.map(veggie => ` ${veggie}`)}`}
          </p>
          <p>
            {`Fruit: ${salad.chosenFruits[0]}`}
          </p>
          <p>
            {`Protein: ${salad.chosenProteins[0]}`}
          </p>
          <p>
            {`Cheese: ${salad.chosenCheeses[0]}`}
          </p>
          <p>
            {`Garnish: ${salad.chosenGarnishes[0]}`}
          </p>
        </section>) : 
        (<Typography variant="body1">Hit the button below to generate a salad!</Typography>)
      }
      <Button onClick={getSalad} color="primary" variant="contained">New Salad</Button>
    </div>
  );
};

export default Spinner;
