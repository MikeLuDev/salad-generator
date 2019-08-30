const ingredients: IIngredients = [
  {
    name: 'bitter greens',
    category: 'greens',
    tags: ['vegan', 'vegetarian', 'pescatarian'],
  },
  {
    name: 'mixed greens',
    category: 'greens',
    tags: ['vegan', 'vegetarian', 'pescatarian'],
  },
  {
    name: 'romaine lettuce',
    category: 'greens',
    tags: ['vegan', 'vegetarian', 'pescatarian'],
  },
  {
    name: 'iceburg lettuce',
    category: 'greens',
    tags: ['vegan', 'vegetarian', 'pescatarian'],
  },
  {
    name: 'arugula',
    category: 'greens',
    tags: ['vegan', 'vegetarian', 'pescatarian'],
  },
  {
    name: 'spinach',
    category: 'greens',
    tags: ['vegan', 'vegetarian', 'pescatarian'],
  },
  {
    name: 'cabbage',
    category: 'greens',
    tags: ['vegan', 'vegetarian', 'pescatarian'],
  },
  {
    name: 'quinoa',
    category: 'grains',
    tags: ['vegan', 'vegetarian', 'pescatarian', 'carbs'],
  },
  {
    name: 'rice',
    category: 'grains',
    tags: ['vegan', 'vegetarian', 'pescatarian', 'carbs'],
  },
  {
    name: 'farro',
    category: 'grains',
    tags: ['vegan', 'vegetarian', 'pescatarian', 'carbs'],
  },
  {
    name: 'barley',
    category: 'grains',
    tags: ['vegan', 'vegetarian', 'gluten', 'pescatarian'],
  },
  {
    name: 'lentil',
    category: 'grains',
    tags: ['vegan', 'vegetarian', 'pescatarian', 'carbs'],
  },
  {
    name: 'pasta',
    category: 'grains',
    tags: ['vegan', 'vegetarian', 'gluten', 'pescatarian', 'carbs'],
  },
  {
    name: 'beet',
    category: 'veggies',
    tags: ['vegan', 'vegetarian', 'pescatarian'],
  },
  {
    name: 'carrot',
    category: 'veggies',
    tags: ['vegan', 'vegetarian', 'pescatarian'],
  },
  {
    name: 'tomato',
    category: 'veggies',
    tags: ['vegan', 'vegetarian', 'pescatarian'],
  },
  {
    name: 'avocado',
    category: 'veggies',
    tags: ['vegan', 'vegetarian', 'pescatarian'],
  },
  {
    name: 'bell pepper',
    category: 'veggies',
    tags: ['vegan', 'vegetarian', 'pescatarian'],
  },
  {
    name: 'celery',
    category: 'veggies',
    tags: ['vegan', 'vegetarian', 'pescatarian'],
  },
  {
    name: 'mushroom',
    category: 'veggies',
    tags: ['vegan', 'vegetarian', 'pescatarian'],
  },
  {
    name: 'onion',
    category: 'veggies',
    tags: ['vegan', 'vegetarian', 'pescatarian'],
  },
  {
    name: 'squash',
    category: 'veggies',
    tags: ['vegan', 'vegetarian', 'pescatarian'],
  },
  {
    name: 'cucumber',
    category: 'veggies',
    tags: ['vegan', 'vegetarian', 'pescatarian'],
  },
  {
    name: 'broccoli',
    category: 'veggies',
    tags: ['vegan', 'vegetarian', 'pescatarian'],
  },
  {
    name: 'cauliflower',
    category: 'veggies',
    tags: ['vegan', 'vegetarian', 'pescatarian'],
  },
  {
    name: 'apple',
    category: 'fruits',
    tags: ['vegan', 'vegetarian', 'pescatarian'],
  },
  {
    name: 'orange',
    category: 'fruits',
    tags: ['vegan', 'vegetarian', 'pescatarian'],
  },
  {
    name: 'cherry',
    category: 'fruits',
    tags: ['vegan', 'vegetarian', 'pescatarian'],
  },
  {
    name: 'pear',
    category: 'fruits',
    tags: ['vegan', 'vegetarian', 'pescatarian'],
  },
  {
    name: 'peach',
    category: 'fruits',
    tags: ['vegan', 'vegetarian', 'pescatarian'],
  },
  { name: 'chicken', category: 'proteins', tags: [] },
  { name: 'steak', category: 'proteins', tags: [] },
  { name: 'ham', category: 'proteins', tags: [] },
  { name: 'egg', category: 'proteins', tags: ['vegetarian', 'pescatarian'] },
  {
    name: 'tofu',
    category: 'proteins',
    tags: ['vegan', 'vegetarian', 'soy', 'pescatarian'],
  },
  {
    name: 'seitan',
    category: 'proteins',
    tags: ['vegan', 'vegetarian', 'pescetarian', 'gluten', 'carbs'],
  },
  {
    name: 'tempeh',
    category: 'proteins',
    tags: ['vegan', 'vegetarian', 'pescetarian', 'soy', 'carbs'],
  },
  { name: 'shrimp', category: 'proteins', tags: ['pescatarian'] },
  { name: 'tuna', category: 'proteins', tags: ['pescatarian'] },
  { name: 'salmon', category: 'proteins', tags: ['pescatarian'] },
  {
    name: 'parmesan',
    category: 'cheeses',
    tags: ['vegetarian', 'dairy', 'pescatarian'],
  },
  {
    name: 'cheddar',
    category: 'cheeses',
    tags: ['vegetarian', 'dairy', 'pescatarian'],
  },
  {
    name: 'swiss',
    category: 'cheeses',
    tags: ['vegetarian', 'dairy', 'pescatarian'],
  },
  {
    name: 'goat',
    category: 'cheeses',
    tags: ['vegetarian', 'dairy', 'pescatarian'],
  },
  {
    name: 'feta',
    category: 'cheeses',
    tags: ['vegetarian', 'dairy', 'pescatarian'],
  },
  {
    name: 'bleu',
    category: 'cheeses',
    tags: ['vegetarian', 'dairy', 'pescatarian'],
  },
  {
    name: 'almond',
    category: 'garnishes',
    tags: ['nuts', 'vegan', 'vegetarian', 'pescatarian'],
  },
  {
    name: 'walnut',
    category: 'garnishes',
    tags: ['nuts', 'vegan', 'vegetarian', 'pescatarian'],
  },
  {
    name: 'pecan',
    category: 'garnishes',
    tags: ['nuts', 'vegan', 'vegetarian', 'pescatarian'],
  },
  {
    name: 'sesame seed',
    category: 'garnishes',
    tags: ['vegan', 'vegetarian', 'pescatarian'],
  },
  {
    name: 'crouton',
    category: 'garnishes',
    tags: ['vegan', 'vegetarian', 'gluten', 'pescatarian', 'carbs'],
  },
  { name: 'bacon', category: 'garnishes', tags: [] },
  {
    name: 'pine nut',
    category: 'garnishes',
    tags: ['nuts', 'vegan', 'vegetarian', 'pescatarian'],
  },
  {
    name: 'cashew',
    category: 'garnishes',
    tags: ['nuts', 'vegan', 'vegetarian', 'pescatarian'],
  },
  {
    name: 'peanut',
    category: 'garnishes',
    tags: ['nuts', 'vegan', 'vegetarian', 'pescatarian'],
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
