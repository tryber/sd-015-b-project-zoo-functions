const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const numberOfChilds = entrants.filter(({ age }) => age < 18).length;
  const numberOfAdults = entrants.filter(({ age }) => age >= 18 && age < 50).length;
  const numberOfSeniors = entrants.filter(({ age }) => age >= 50).length;

  const entrantsOccurrences = (child, adult, senior) => ({
    child,
    adult,
    senior,
  });

  return entrantsOccurrences(numberOfChilds, numberOfAdults, numberOfSeniors);
}

function calculateEntry(entrants) {
  // seu código aqui
  if (entrants === undefined || Object.entries(entrants).length === 0) {
    return 0;
  }
  const { child, adult, senior } = countEntrants(entrants);
  const [childValue, adultValue, seniorValue] = [20.99, 49.99, 24.99];
  const totalPrice = child * childValue + adult * adultValue + senior * seniorValue;

  return totalPrice;
}

module.exports = { calculateEntry, countEntrants };
