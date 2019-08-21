import saladIngredients from '../constants/saladIngredients';
import util from './util';

const { getRandomInt } = util;

const pickRandomIngredients = (ingredients: string[], count: number) => {
  if (count > ingredients.length) return ingredients;

  const pickedIndexes: number[] = [];
  const pickedIngredients: string[] = [];

  for (let i = 0; i < count; i += 1) {
    let randomInt = getRandomInt(ingredients.length);
    while (pickedIndexes.includes(randomInt))
      randomInt = getRandomInt(ingredients.length);

    pickedIndexes.push(randomInt);
    pickedIngredients[i] = ingredients[randomInt];
  }

  return pickedIngredients;
};

export default () => {
  const {
    greens,
    grains,
    veggies,
    fruits,
    proteins,
    cheeses,
    garnishes,
  } = saladIngredients;

  const chosenGreens = pickRandomIngredients(greens, 1);
  const chosenGrains = pickRandomIngredients(grains, 1);
  const chosenVeggies = pickRandomIngredients(veggies, 3);
  const chosenFruits = pickRandomIngredients(fruits, 1);
  const chosenProteins = pickRandomIngredients(proteins, 1);
  const chosenCheeses = pickRandomIngredients(cheeses, 1);
  const chosenGarnishes = pickRandomIngredients(garnishes, 1);

  return {
    chosenGreens,
    chosenGrains,
    chosenVeggies,
    chosenFruits,
    chosenProteins,
    chosenCheeses,
    chosenGarnishes,
  };
};
