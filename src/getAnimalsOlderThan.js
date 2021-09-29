const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animalInput = species.find((nameInput) => nameInput.name === animal);
  // Primeiro procura o nome do animal dentro de 'species'.
  return animalInput.residents.every((ageInput) => ageInput.age >= age);
  // Em seguida busca todos os animais com que tenham a idade maior ou igual à passada no parâmetro.
}

module.exports = getAnimalsOlderThan;
