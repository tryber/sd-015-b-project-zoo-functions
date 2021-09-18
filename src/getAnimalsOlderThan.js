const data = require('../data/zoo_data');

const getSpecieByName = (nameToFind) => data.species.find((name) => name.name === nameToFind);

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const specie = getSpecieByName(animal);
  console.log(specie);
  return specie.residents.every((specieToCompareAge) => specieToCompareAge.age >= age);
}
getAnimalsOlderThan('lions', 13);

module.exports = getAnimalsOlderThan;
