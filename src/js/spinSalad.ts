import saladIngredients from '../constants/saladIngredients';
import util from './util';
import settings from './settings';

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

export default async () => {
  const {
    greens,
    grains,
    veggies,
    fruits,
    proteins,
    cheeses,
    garnishes,
  } = saladIngredients;

  const saladSettings = await settings.getSettings();

  const chosenGreens = saladSettings.greens.enabled
    ? pickRandomIngredients(greens, saladSettings.greens.amount)
    : undefined;
  const chosenGrains = saladSettings.grains.enabled
    ? pickRandomIngredients(grains, saladSettings.grains.amount)
    : undefined;
  const chosenVeggies = saladSettings.veggies.enabled
    ? pickRandomIngredients(veggies, saladSettings.veggies.amount)
    : undefined;
  const chosenFruits = saladSettings.fruits.enabled
    ? pickRandomIngredients(fruits, saladSettings.fruits.amount)
    : undefined;
  const chosenProteins = saladSettings.proteins.enabled
    ? pickRandomIngredients(proteins, saladSettings.proteins.amount)
    : undefined;
  const chosenCheeses = saladSettings.cheeses.enabled
    ? pickRandomIngredients(cheeses, saladSettings.cheeses.amount)
    : undefined;
  const chosenGarnishes = saladSettings.garnishes.enabled
    ? pickRandomIngredients(garnishes, saladSettings.garnishes.amount)
    : undefined;

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
