import saladIngredients from '../constants/saladIngredients';
import util from './util';
import settings from './settings';

const { getRandomInt } = util;

const pickRandomIngredients = (category: string, count: number) => {
  const pickedIndexes: number[] = [];
  const pickedIngredientKeys: string[] = [];
  const ingredientKeys: string[] = Object.keys(saladIngredients);
  const ingredients: string[] = ingredientKeys.filter((key) => {
    if (saladIngredients[key].category === category) return key;
    else return null;
  });

  if (!ingredients.length) return;
  if (count > ingredients.length) return ingredients;

  for (let i = 0; i < count; i += 1) {
    let randomInt: number = getRandomInt(ingredients.length);

    while (pickedIndexes.includes(randomInt))
      randomInt = getRandomInt(ingredients.length);

    pickedIndexes.push(randomInt);
    pickedIngredientKeys[i] = ingredients[randomInt];
  }

  return pickedIngredientKeys;
};

export default async () => {
  const saladSettings = await settings.getSettings();
  const result: ISalad = {};

  const settingsKeys: string[] = Object.keys(saladSettings);
  const enabledCategories: string[] = settingsKeys.filter(
    (key) => saladSettings[key].enabled === true,
  );

  enabledCategories.forEach((category) => {
    const count = saladSettings[category].amount;

    const ingredients = pickRandomIngredients(category, count);
    if (ingredients !== undefined) result[category] = ingredients;
  });

  return result;
};
