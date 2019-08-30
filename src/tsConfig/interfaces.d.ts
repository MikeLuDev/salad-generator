const categories =
  'greens' |
  'grains' |
  'veggies' |
  'fruits' |
  'proteins' |
  'cheeses' |
  'garnishes';

interface ISingleIngredient {
  name: string;
  category: categories;
  tags: string[];
}

interface IIngredients extends Array<ISingleIngredient> {}

interface ISalad {
  [propName: string]: string[] | undefined;
}

interface ISingleOption {
  enabled: boolean;
  amount: number;
}

interface IUserOptions {
  [propName: string]: ISingleOption;
}

interface IDietaryOptions {
  diet: 'vegan' | 'vegetarian' | 'pescatarian' | 'none';
  lowCarb: boolean;
  dairyFree: boolean;
  soyFree: boolean;
  glutenFree: boolean;
  nutFree: boolean;
}
