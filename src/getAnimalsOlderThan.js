const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const arrayFind = data.species.find((nomeAnimal) => nomeAnimal.name === animal);
  return arrayFind.residents.every((bixo) => bixo.age > age);
}

console.log(getAnimalsOlderThan('lions'));
module.exports = getAnimalsOlderThan;
