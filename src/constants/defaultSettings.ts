const saladDefaultSettings: IUserOptions = {
  greens: {
    enabled: true,
    amount: 1,
  },
  grains: {
    enabled: true,
    amount: 1,
  },
  veggies: {
    enabled: true,
    amount: 3,
  },
  fruits: {
    enabled: true,
    amount: 1,
  },
  proteins: {
    enabled: true,
    amount: 1,
  },
  cheeses: {
    enabled: true,
    amount: 1,
  },
  garnishes: {
    enabled: true,
    amount: 1,
  },
};

const dietaryDefaultSettings: IDietaryOptions = {
  diet: 'none',
  lowCarb: false,
  dairyFree: false,
  soyFree: false,
  glutenFree: false,
  nutFree: false,
};

export { saladDefaultSettings as default, dietaryDefaultSettings };
