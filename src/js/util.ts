export default {
  getRandomInt: (max: number) => {
    return Math.floor(Math.random() * Math.floor(max));
  },

  capitalizeFirstLetter: (text: string) =>
    text.charAt(0).toUpperCase() + text.slice(1),
};
