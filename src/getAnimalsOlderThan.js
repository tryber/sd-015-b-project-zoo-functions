const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const buscaNomaEspecie = species.find((especies) => especies.name === animal);

  return buscaNomaEspecie.residents.every((animais) => animais.age >= age);
}

module.exports = getAnimalsOlderThan;
