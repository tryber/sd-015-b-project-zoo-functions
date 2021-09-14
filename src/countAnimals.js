const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {

  }

  if (animal.gender === undefined) {
  // finding specie
  const specie = animal.specie;
  // finding specie
  const findingAnimal = species.find((elemento) => specie.includes(elemento.name));
  // filtering popularity
  return findingAnimal.residents.length;
  }

  if (animal.gender !== undefined) {
  // finding specie
  const specie = animal.specie;
  // finding specie
  const findingAnimal = species.find((elemento) => specie.includes(elemento.name));
  // filtering gender
  const sex = animal.gender;
  const filterGender = species.find((elemento) => sex.includes(elemento.residents.sex));
  return filterGender;
  }
}
module.exports = countAnimals;

console.log(countAnimals({specie: 'otters'}));