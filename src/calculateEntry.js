const data = require('../data/zoo_data');

const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

function countEntrants(entries) {
  // seu código aqui
  if (!entries) {
    return 0;
  }

  const child = entries.filter((element) => element.age < 18);
  const adult = entries.filter((element) => element.age >= 18 && element.age < 50);
  const senior = entries.filter((element) => element.age >= 50);

  return {
    adult: adult.length,
    child: child.length,
    senior: senior.length,
  };
}

const totalPrice = (adult, child, senior) => {
  const priceAdult = 49.99;
  const priceChild = 20.99;
  const priceSenior = 24.99;

  const total = (priceAdult * adult) + (priceChild * child) + (priceSenior * senior);

  return total;
};

function calculateEntry(entries) {
  // seu código aqui
  if (!entries) {
    return 0;
  }

  const objectEntrants = countEntrants(entries);
  const { adult, child, senior } = objectEntrants;

  const total = totalPrice(adult, child, senior);
  return total;
}
// console.log(calculateEntry(entrants));
module.exports = { calculateEntry, countEntrants };
