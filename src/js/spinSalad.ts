import saladIngredients from '../constants/saladIngredients';
import util from './util';
import settings from './settings';

const { getRandomInt } = util;

const pickRandomIngredients = (
  category: string,
  count: number,
  ingredients: IIngredients,
) => {
  const pickedIndexes: number[] = [];
  const pickedIngredientKeys: string[] = [];

  const ingredientNames: string[] = ingredients
    .filter((ingredient) => ingredient.category === category)
    .map((ingredient) => ingredient.name);

  if (!ingredientNames.length) return;
  if (count > ingredientNames.length) return ingredientNames;

  for (let i = 0; i < count; i += 1) {
    let randomInt: number = getRandomInt(ingredientNames.length);

    while (pickedIndexes.includes(randomInt))
      randomInt = getRandomInt(ingredientNames.length);

    pickedIndexes.push(randomInt);
    pickedIngredientKeys[i] = ingredientNames[randomInt];
  }

  return pickedIngredientKeys;
};

const filterIngredientsByDiet = async () => {
  const dietarySettings = await settings.dietarySettings.getDietarySettings();
  const { diet, lowCarb, dairyFree, soyFree, glutenFree } = dietarySettings;
  let ingredients = saladIngredients;

  const filterByTag = (tag: string, includes: boolean = true) => {
    ingredients = ingredients.filter((ingredient) =>
      includes ? ingredient.tags.includes(tag) : !ingredient.tags.includes(tag),
    );
  };

  if (diet !== 'none') filterByTag(diet);
  if (lowCarb) filterByTag('carbs', false);
  if (dairyFree) filterByTag('soy', false);
  if (soyFree) filterByTag('soy', false);
  if (soyFree) filterByTag('gluten', false);

  return ingredients;
};

export default async () => {
  const result: ISalad = {};
  const saladSettings = await settings.ingredientSettings.getIngredientSettings();
  const dietaryIngredients = await filterIngredientsByDiet();

  const settingsKeys: string[] = Object.keys(saladSettings);
  const enabledCategories: string[] = settingsKeys.filter(
    (key) => saladSettings[key].enabled === true,
  );

  enabledCategories.forEach((category) => {
    const count = saladSettings[category].amount;

    const ingredients = pickRandomIngredients(
      category,
      count,
      dietaryIngredients,
    );
    if (ingredients !== undefined) result[category] = ingredients;
  });

  return result;
};
