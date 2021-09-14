const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, ages) {
  let result = false;
  species.forEach((specie) => {
    if (specie.name === animal) {
      result = specie.residents.every(({ age }) => age >= ages);
    }
  });
  return result;
}
console.log(getAnimalsOlderThan('otters', 7));
module.exports = getAnimalsOlderThan;
