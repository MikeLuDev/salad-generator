interface IIngredients {
  [propName: string]: string[];
}

interface ISalad {
  chosenGreens: string[];
  chosenGrains: string[];
  chosenVeggies: string[];
  chosenFruits: string[];
  chosenProteins: string[];
  chosenCheeses: string[];
  chosenGarnishes: string[];
}

interface ISingleOption {
  enabled: boolean;
  amount: number;
}

interface IUserOptions {
  [propName: string]: ISingleOption;
}
