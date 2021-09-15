const { prices } = require('../data/zoo_data');

const countEntrants = (entrants) => {
  let child = 0;
  let adult = 0;
  let senior = 0;
  entrants.forEach(({ age }) => {
    if (age < 18) {
      child += 1;
    } if (age >= 18 && age < 50) {
      adult += 1;
    } if (age >= 50) {
      senior += 1;
    }
  });
  const obj = { child, adult, senior };
  return obj;
};

const multiplyEntry = (entValue, priceValue) => {
  const [a, s, c] = priceValue;
  const preco = [c, a, s];

  let soma = 0;
  entValue.forEach((value, i) => {
    soma += value * preco[i];
  });
  return soma;
};

function calculateEntry(entrants) {
  if (!entrants) return 0;
  if (Object.entries(entrants).length === 0) return 0;
  const entrantsValue = Object.values(countEntrants(entrants));
  const pricesValue = Object.values(prices);
  return multiplyEntry(entrantsValue, pricesValue);
}

module.exports = { calculateEntry, countEntrants };
