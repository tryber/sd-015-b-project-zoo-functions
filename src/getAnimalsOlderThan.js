const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const nome = data.species.find((especie) => especie.name === animal);
  return nome.residents.every((idade) => idade.age >= age);
}

module.exports = getAnimalsOlderThan;
