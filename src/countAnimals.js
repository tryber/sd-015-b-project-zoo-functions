const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const objtAnimals = {};
species.forEach((specie) => {
  const keyAnimal = specie.name;
  const qtdAnimal = specie.residents.length;
  objtAnimals[keyAnimal] = qtdAnimal;
});
// const numberOfAnimals = (animal) => {
// const objtParameter = Object.values(animal);
// return species.find((specie) => specie.name === specie.objtParameter)
// .residents.length;
// };
// console.log(objtAnimals);
function countAnimals(animal) {
  if (animal === undefined) return objtAnimals;
}

module.exports = countAnimals;
console.log(countAnimals());
