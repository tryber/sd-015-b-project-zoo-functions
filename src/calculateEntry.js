const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const ticket = data.prices;
  const child = 0;
  const adult = 0;
  const senior = 0;
  if (entrants.age < 18) {
    child += 1;
  } else if (entrants.age >= 50) {
    senior += 1;
  } else {
    adult +=1;
  }

}

function calculateEntry(entrants) {
  // seu código aqui
}

module.exports = { calculateEntry, countEntrants };
