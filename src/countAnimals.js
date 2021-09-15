const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const objtAnimals = {};
species.forEach((specie) => {
  const keyAnimal = specie.name;
  const qtdAnimal = specie.residents.length;
  objtAnimals[keyAnimal] = qtdAnimal;
});

// console.log(objtAnimals);
function countAnimals(animal) {
  if (animal === undefined) {
    return objtAnimals;
  }
}

module.exports = countAnimals;
