const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // coletar o animal pelo name
  const findAnimal = species.find((elemento) => animal.includes(elemento.name))
  // comparar idade do animal encontrado
  const findAge = species.find((elemento) => elemento.residents.age < age)

  return findAge
}


module.exports = getAnimalsOlderThan;

console.log(getAnimalsOlderThan('otters', 4));