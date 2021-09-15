const data = require("../data/zoo_data");

const { prices } = data;

/* const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
]; */

function countEntrants(entrants) {
  // seu código aqui
  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;

  const entriesChild = entrants.filter((child) => child.age < 18);
  const entriesAdult = entrants.filter((adult) => adult.age >= 18 && adult.age < 50);
  const entriesSenior = entrants.filter((senior) => senior.age >= 50);

  const objectEntrants = {
    child: entriesChild.length,
    adult: entriesAdult.length,
    senior: entriesSenior.length,
  };

  return objectEntrants;
}

function calculateEntry(entrants) {
  // seu código aqui
  const dataEntrants = countEntrants(entrants);
  if (dataEntrants === 0) return 0;

  const calculateChild = dataEntrants.child * prices.child;
  const calculateAdults = dataEntrants.adult * prices.adult;
  const calculateSeniors = dataEntrants.senior * prices.senior;
  const totalPrices = calculateChild + calculateAdults + calculateSeniors;

  return totalPrices;
}
// console.log(calculateEntry());
// calculateEntry(entrants);
module.exports = { calculateEntry, countEntrants };
