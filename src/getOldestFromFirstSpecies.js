const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(identification) {
  const findEmployee = data.employees.find(({ id }) => id === identification).responsibleFor[0];
  const findSpecie = data.species.find(({ id }) => id === findEmployee).residents
    .sort((a, b) => b.age - a.age).find((value) => value);
  return Object.values(findSpecie);
}

console.log(getOldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992'));
module.exports = getOldestFromFirstSpecies;

