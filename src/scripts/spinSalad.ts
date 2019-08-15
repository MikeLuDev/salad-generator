import saladIngredients from '../constants/saladIngredients';
import util from './util';

const { getRandomInt } = util;

const pickRandomIngredients = (ingredients: string[], count: number) => {
  const pickedIngredients: string[] = [];

  const pickNewIngredient = () => {
    let ingredient =  ingredients[getRandomInt(ingredients.length)];

    if (pickedIngredients.includes(ingredient)) {
      pickNewIngredient();
    }

    return ingredient;
  };

  for (let i = 0; i < count; i += 1) {
    pickedIngredients[i] = pickNewIngredient();
  }

  return pickedIngredients;
};

export default () => {
  const { greens, grains, veggies, fruits, proteins, cheeses, garnishes } = saladIngredients;

  const chosenGreens = pickRandomIngredients(greens, 1);
  const chosenGrains = pickRandomIngredients(grains, 1);
  const chosenVeggies = pickRandomIngredients(veggies, 3);
  const chosenFruits = pickRandomIngredients(fruits, 1);
  const chosenProteins = pickRandomIngredients(proteins, 1);
  const chosenCheeses = pickRandomIngredients(cheeses, 1);
  const chosenGarnishes = pickRandomIngredients(garnishes, 1);

  console.log(chosenGreens);

  return {
    chosenGreens,
    chosenGrains,
    chosenVeggies,
    chosenFruits,
    chosenProteins,
    chosenCheeses,
    chosenGarnishes
  };
};
