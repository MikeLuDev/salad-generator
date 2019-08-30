const ingredients: IIngredients = [
  { name: 'bitter greens', category: 'greens', tags: ['vegan', 'vegetarian'] },
  { name: 'mixed greens', category: 'greens', tags: ['vegan', 'vegetarian'] },
  {
    name: 'romaine lettuce',
    category: 'greens',
    tags: ['vegan', 'vegetarian'],
  },
  {
    name: 'iceburg lettuce',
    category: 'greens',
    tags: ['vegan', 'vegetarian'],
  },
  { name: 'arugula', category: 'greens', tags: ['vegan', 'vegetarian'] },
  { name: 'spinach', category: 'greens', tags: ['vegan', 'vegetarian'] },
  { name: 'cabbage', category: 'greens', tags: ['vegan', 'vegetarian'] },
  { name: 'quinoa', category: 'grains', tags: ['vegan', 'vegetarian'] },
  { name: 'rice', category: 'grains', tags: ['vegan', 'vegetarian'] },
  { name: 'farro', category: 'grains', tags: ['vegan', 'vegetarian'] },
  {
    name: 'barley',
    category: 'grains',
    tags: ['vegan', 'vegetarian', 'gluten'],
  },
  { name: 'lentil', category: 'grains', tags: ['vegan', 'vegetarian'] },
  {
    name: 'pasta',
    category: 'grains',
    tags: ['vegan', 'vegetarian', 'gluten'],
  },
  { name: 'beet', category: 'veggies', tags: ['vegan', 'vegetarian'] },
  { name: 'carrot', category: 'veggies', tags: ['vegan', 'vegetarian'] },
  { name: 'tomato', category: 'veggies', tags: ['vegan', 'vegetarian'] },
  { name: 'avocado', category: 'veggies', tags: ['vegan', 'vegetarian'] },
  { name: 'bell pepper', category: 'veggies', tags: ['vegan', 'vegetarian'] },
  { name: 'celery', category: 'veggies', tags: ['vegan', 'vegetarian'] },
  { name: 'mushroom', category: 'veggies', tags: ['vegan', 'vegetarian'] },
  { name: 'onion', category: 'veggies', tags: ['vegan', 'vegetarian'] },
  { name: 'squash', category: 'veggies', tags: ['vegan', 'vegetarian'] },
  { name: 'cucumber', category: 'veggies', tags: ['vegan', 'vegetarian'] },
  { name: 'broccoli', category: 'veggies', tags: ['vegan', 'vegetarian'] },
  { name: 'cauliflower', category: 'veggies', tags: ['vegan', 'vegetarian'] },
  { name: 'apple', category: 'fruits', tags: ['vegan', 'vegetarian'] },
  { name: 'orange', category: 'fruits', tags: ['vegan', 'vegetarian'] },
  { name: 'cherry', category: 'fruits', tags: ['vegan', 'vegetarian'] },
  { name: 'pear', category: 'fruits', tags: ['vegan', 'vegetarian'] },
  { name: 'peach', category: 'fruits', tags: ['vegan', 'vegetarian'] },
  { name: 'chicken', category: 'proteins', tags: [] },
  { name: 'steak', category: 'proteins', tags: [] },
  { name: 'ham', category: 'proteins', tags: [] },
  { name: 'egg', category: 'proteins', tags: ['vegetarian'] },
  { name: 'tofu', category: 'proteins', tags: ['vegan', 'vegetarian', 'soy'] },
  { name: 'shrimp', category: 'proteins', tags: ['pescatarian'] },
  { name: 'tuna', category: 'proteins', tags: ['pescatarian'] },
  { name: 'salmon', category: 'proteins', tags: ['pescatarian'] },
  { name: 'parmesan', category: 'cheeses', tags: ['vegetarian', 'dairy'] },
  { name: 'cheddar', category: 'cheeses', tags: ['vegetarian', 'dairy'] },
  { name: 'swiss', category: 'cheeses', tags: ['vegetarian', 'dairy'] },
  { name: 'goat', category: 'cheeses', tags: ['vegetarian', 'dairy'] },
  { name: 'feta', category: 'cheeses', tags: ['vegetarian', 'dairy'] },
  { name: 'bleu', category: 'cheeses', tags: ['vegetarian', 'dairy'] },
  {
    name: 'almond',
    category: 'garnishes',
    tags: ['nuts', 'vegan', 'vegetarian'],
  },
  {
    name: 'walnut',
    category: 'garnishes',
    tags: ['nuts', 'vegan', 'vegetarian'],
  },
  {
    name: 'pecan',
    category: 'garnishes',
    tags: ['nuts', 'vegan', 'vegetarian'],
  },
  { name: 'sesame seed', category: 'garnishes', tags: ['vegan', 'vegetarian'] },
  {
    name: 'crouton',
    category: 'garnishes',
    tags: ['vegan', 'vegetarian', 'gluten'],
  },
  { name: 'bacon', category: 'garnishes', tags: [] },
  {
    name: 'pine nut',
    category: 'garnishes',
    tags: ['nuts', 'vegan', 'vegetarian'],
  },
  {
    name: 'cashew',
    category: 'garnishes',
    tags: ['nuts', 'vegan', 'vegetarian'],
  },
  {
    name: 'peanut',
    category: 'garnishes',
    tags: ['nuts', 'vegan', 'vegetarian'],
  },
];

type MetaInfo = {
  [key: string]: {
    amount: number;
  };
};

const getIngredientInfo = () => {
  const metaInfo: MetaInfo = {};

  ingredients.forEach((ingredient) => {
    const { category } = ingredient;
    if (!metaInfo.hasOwnProperty(category)) metaInfo[category] = { amount: 0 };

    metaInfo[category].amount += 1;
  });

  return metaInfo;
};

const ingredientMetadata = getIngredientInfo();

export { ingredients as default, ingredientMetadata };
