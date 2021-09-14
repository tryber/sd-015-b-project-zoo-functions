// Esta função, a partir do nome de uma espécie e uma idade mínima, verifica se todos os animais daquela espécie possuem a idade mínima especificada.

// Observações técnicas

// Deve retornar um valor booleano.
// O que será avaliado

// Ao passar o nome de uma espécie e uma idade, testa se todos os animais desta espécie possuem a idade mínima especificada.
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const findAnimal = data.species.find((anim) => anim.name === animal);
  return findAnimal.residents.every((minAge) => minAge.age >= age);
}

console.log(getAnimalsOlderThan('tigers', 16));
module.exports = getAnimalsOlderThan;
