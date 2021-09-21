const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const child = entrants.filter(({ age }) => age < 18).length;
  const adult = entrants.filter(({ age }) => age >= 18 && age < 50).length;
  const senior = entrants.filter(({ age }) => age >= 50).length;
  return { child, adult, senior };
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  let { child, adult, senior } = data.prices;
  child *= countEntrants(entrants).child;
  adult *= countEntrants(entrants).adult;
  senior *= countEntrants(entrants).senior;
  const totalPrice = child + adult + senior;
  return totalPrice;
}

module.exports = { calculateEntry, countEntrants };
