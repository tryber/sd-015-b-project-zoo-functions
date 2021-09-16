const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const child = entrants.filter(({ age }) => age < 18).length;
  const adult = entrants.filter(({ age }) => age >= 18 && age < 50).length;
  const senior = entrants.filter(({ age }) => age >= 50).length;
  const people = { child, adult, senior };
  return people;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || Object.keys(entrants).length === 0) return 0;

  const priceEntrant = countEntrants(entrants);

  return (
    (prices.child * +priceEntrant.child)
    + (prices.adult * +priceEntrant.adult)
    + (prices.senior * +priceEntrant.senior)
  );
}

module.exports = { calculateEntry, countEntrants };
