const ingredients: IIngredients = {
  'bitter greens': {
    category: 'greens',
    tags: ['vegan', 'vegetarian'],
  },
  'mixed greens': {
    category: 'greens',
    tags: ['vegan', 'vegetarian'],
  },
  'romaine lettuce': {
    category: 'greens',
    tags: ['vegan', 'vegetarian'],
  },
  'iceburg lettuce': {
    category: 'greens',
    tags: ['vegan', 'vegetarian'],
  },
  arugula: {
    category: 'greens',
    tags: ['vegan', 'vegetarian'],
  },
  spinach: {
    category: 'greens',
    tags: ['vegan', 'vegetarian'],
  },
  cabbage: {
    category: 'greens',
    tags: ['vegan', 'vegetarian'],
  },
  quinoa: {
    category: 'grains',
    tags: ['vegan', 'vegetarian'],
  },
  rice: {
    category: 'grains',
    tags: ['vegan', 'vegetarian'],
  },
  farro: {
    category: 'grains',
    tags: ['vegan', 'vegetarian'],
  },
  barley: {
    category: 'grains',
    tags: ['vegan', 'vegetarian'],
  },
  lentil: {
    category: 'grains',
    tags: ['vegan', 'vegetarian'],
  },
  pasta: {
    category: 'grains',
    tags: ['vegan', 'vegetarian', 'gluten'],
  },
  beet: {
    category: 'veggies',
    tags: ['vegan', 'vegetarian'],
  },
  carrot: {
    category: 'veggies',
    tags: ['vegan', 'vegetarian'],
  },
  tomato: {
    category: 'veggies',
    tags: ['vegan', 'vegetarian'],
  },
  avocado: {
    category: 'veggies',
    tags: ['vegan', 'vegetarian'],
  },
  'bell pepper': {
    category: 'veggies',
    tags: ['vegan', 'vegetarian'],
  },
  celery: {
    category: 'veggies',
    tags: ['vegan', 'vegetarian'],
  },
  mushroom: {
    category: 'veggies',
    tags: ['vegan', 'vegetarian'],
  },
  onion: {
    category: 'veggies',
    tags: ['vegan', 'vegetarian'],
  },
  squash: {
    category: 'veggies',
    tags: ['vegan', 'vegetarian'],
  },
  cucumber: {
    category: 'veggies',
    tags: ['vegan', 'vegetarian'],
  },
  broccoli: {
    category: 'veggies',
    tags: ['vegan', 'vegetarian'],
  },
  cauliflower: {
    category: 'veggies',
    tags: ['vegan', 'vegetarian'],
  },
  apple: {
    category: 'fruits',
    tags: ['vegan', 'vegetarian'],
  },
  orange: {
    category: 'fruits',
    tags: ['vegan', 'vegetarian'],
  },
  cherry: {
    category: 'fruits',
    tags: ['vegan', 'vegetarian'],
  },
  pear: {
    category: 'fruits',
    tags: ['vegan', 'vegetarian'],
  },
  peach: {
    category: 'fruits',
    tags: ['vegan', 'vegetarian'],
  },
  chicken: {
    category: 'proteins',
    tags: [],
  },
  steak: {
    category: 'proteins',
    tags: [],
  },
  ham: {
    category: 'proteins',
    tags: [],
  },
  egg: {
    category: 'proteins',
    tags: ['vegetarian'],
  },
  tofu: {
    category: 'proteins',
    tags: ['vegan', 'vegetarian', 'soy'],
  },
  shrimp: {
    category: 'proteins',
    tags: ['pescatarian'],
  },
  tuna: {
    category: 'proteins',
    tags: ['pescatarian'],
  },
  salmon: {
    category: 'proteins',
    tags: ['pescatarian'],
  },
  parmesan: {
    category: 'cheeses',
    tags: ['vegetarian', 'dairy'],
  },
  cheddar: {
    category: 'cheeses',
    tags: ['vegetarian', 'dairy'],
  },
  swiss: {
    category: 'cheeses',
    tags: ['vegetarian', 'dairy'],
  },
  goat: {
    category: 'cheeses',
    tags: ['vegetarian', 'dairy'],
  },
  feta: {
    category: 'cheeses',
    tags: ['vegetarian', 'dairy'],
  },
  bleu: {
    category: 'cheeses',
    tags: ['vegetarian', 'dairy'],
  },
  almond: {
    category: 'garnishes',
    tags: ['nuts', 'vegan', 'vegetarian'],
  },
  walnut: {
    category: 'garnishes',
    tags: ['nuts', 'vegan', 'vegetarian'],
  },
  pecan: {
    category: 'garnishes',
    tags: ['nuts', 'vegan', 'vegetarian'],
  },
  'sesame seed': {
    category: 'garnishes',
    tags: ['vegan', 'vegetarian'],
  },
  crouton: {
    category: 'garnishes',
    tags: ['vegan', 'vegetarian', 'gluten'],
  },
  bacon: {
    category: 'garnishes',
    tags: [],
  },
  'pine nut': {
    category: 'garnishes',
    tags: ['nuts', 'vegan', 'vegetarian'],
  },
  cashew: {
    category: 'garnishes',
    tags: ['nuts', 'vegan', 'vegetarian'],
  },
  peanut: {
    category: 'garnishes',
    tags: ['nuts', 'vegan', 'vegetarian'],
  },
};

type MetaInfo = {
  [key: string]: {
    amount: number;
  };
};

const getIngredientInfo = () => {
  const keys: string[] = Object.keys(ingredients);
  const metaInfo: MetaInfo = {};

  keys.forEach((key) => {
    const currentIngredient = ingredients[key];
    const currentCategory = currentIngredient.category;
    if (!metaInfo.hasOwnProperty(currentCategory))
      metaInfo[currentCategory] = { amount: 0 };

    metaInfo[currentCategory].amount += 1;
  });

  return metaInfo;
};

const ingredientMetadata = getIngredientInfo();

export { ingredients as default, ingredientMetadata };
