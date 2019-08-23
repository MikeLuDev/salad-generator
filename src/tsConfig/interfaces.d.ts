interface ISalad {
  chosenGreens: string[];
  chosenGrains: string[];
  chosenVeggies: string[];
  chosenFruits: string[];
  chosenProteins: string[];
  chosenCheeses: string[];
  chosenGarnishes: string[];
}

interface IUserOptions {
  greens: {
    enabled: bool;
    amount: number;
  };
  grains: {
    enabled: bool;
    amount: number;
  };
  veggies: {
    enabled: bool;
    amount: number;
  };
  fruits: {
    enabled: bool;
    amount: number;
  };
  protein: {
    enabled: bool;
    amount: number;
  };
  cheese: {
    enabled: bool;
    amount: number;
  };
  garnish: {
    enabled: bool;
    amount: number;
  };
}
