interface IIngredients {
  [propName: string]: string[];
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
