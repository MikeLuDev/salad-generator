const categories =
  'greens' |
  'grains' |
  'veggies' |
  'fruits' |
  'proteins' |
  'cheeses' |
  'garnishes';

interface ISingleIngredient {
  category: categories;
  tags: string[];
}

interface IIngredients {
  [ingredientName: string]: ISingleIngredient;
}

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
