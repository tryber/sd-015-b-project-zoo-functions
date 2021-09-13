const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const a = data.species.find((specie) => specie.name === animal);
  return a.residents.every((e) => e.age >= age);
}

module.exports = getAnimalsOlderThan;
