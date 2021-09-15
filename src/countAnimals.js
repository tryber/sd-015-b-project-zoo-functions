const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) return species.map((curr) => `${curr.name}: ${curr.residents.length}`);
  const { residents } = species.find((specie) => specie.name === animal.specie);
  const sexResidentsLength = residents.filter((resident) => resident.sex === animal.sex).length;
  return (animal.sex) ? sexResidentsLength : residents.length;
}

module.exports = countAnimals;
