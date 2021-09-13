const data = require('../data/zoo_data');

function countEntrantsAux(acc, ent) {
  const child = (ent.age < 18) ? acc.child + 1 : acc.child;
  const adult = ((ent.age >= 18) && (ent.age < 50)) ? acc.adult + 1 : acc.adult;
  const senior = (ent.age >= 50) ? acc.senior + 1 : acc.senior;
  return [child, adult, senior];
}
function countEntrants(entrants) {
  // seu código aqui
  return entrants.reduce((acc, ent) => {
    const [child, adult, senior] = countEntrantsAux(acc, ent);
    return { child, adult, senior };
  }, { child: 0, adult: 0, senior: 0 });
}

function calculateEntry(entrants) {
  // seu código aqui
  const entrandsQty = countEntrants(entrants);
  const [priceChild, priceAdult, priceSenior] = [20.99, 49.99, 24.99];

  return entrandsQty.child * priceChild
    + entrandsQty.adult * priceAdult
    + entrandsQty.senior * priceSenior;
}

const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

console.log(calculateEntry(entrants));
module.exports = { calculateEntry, countEntrants };
