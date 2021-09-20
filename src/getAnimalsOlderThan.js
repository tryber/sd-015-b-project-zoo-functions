const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animalSelecionado = data.species.find((especie) => especie.name === animal);
  const verificarIdade = animalSelecionado.residents.every((animalAge) => animalAge.age >= age);
  return verificarIdade;
}

module.exports = getAnimalsOlderThan;
