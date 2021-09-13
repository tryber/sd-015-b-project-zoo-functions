const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const animals = data.species;
  const busca = animals.filter((animal) => ids.includes(animal.id));
  return busca;
}

module.exports = getSpeciesByIds;
