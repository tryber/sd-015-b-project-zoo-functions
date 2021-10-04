const { data, employees, species } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const fildId = employees.find((value) => value.id === id);
  const filSpecies = species.find((value) => value.id === fildId.responsibleFor[0]);
  const orderSpecies = filSpecies.residents.sort((a, b) => b.age - a.age);
  return Object.values(orderSpecies[0]);
}

module.exports = getOldestFromFirstSpecies;
