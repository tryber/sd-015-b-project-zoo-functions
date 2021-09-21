const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const getName = species.find((specie) => specie.name === animal);

  return getName.residents.every((residents) => residents.age > age);
}

module.exports = getAnimalsOlderThan;

// Implemente a função getAnimalsOlderThan:
// - Esta função, a partir do nome de uma espécie e uma idade mínima, verifica se todos os animais daquela espécie possuem a idade mínima especificada.
