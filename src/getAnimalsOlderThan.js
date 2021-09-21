const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // encontra a primeira especie
  const species = data.species.find((specie) => specie.name === animal);

  // verifica se os animais possuem a idade minima
  return species.residents.every((resident) => resident.age >= age);
}

module.exports = getAnimalsOlderThan;
