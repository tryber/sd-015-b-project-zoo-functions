const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const bichos = species.find(((specie) => specie.name === animal));
  const [...animals] = bichos.residents;
  const idade = [];
  animals.forEach((bicho, index) => idade.push(bicho.age));
  return idade.every((numero) => numero > age);
}

module.exports = getAnimalsOlderThan;
