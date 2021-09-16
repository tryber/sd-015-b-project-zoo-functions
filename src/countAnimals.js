const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const objtAnimals = {};
species.forEach((specie) => {
  const keyAnimal = specie.name;
  const qtdAnimal = specie.residents.length;
  objtAnimals[keyAnimal] = qtdAnimal;
});

const getNumberOfAnimals = (animal) => {
  const objtParameter = Object.values(animal).toString();
  const numberOfSpecie = species.find((specie) => specie.name === objtParameter)
    .residents.length;
  return numberOfSpecie;
};

// console.log(objtAnimals);
function countAnimals(animal) {
  if (animal === undefined) return objtAnimals;
}

module.exports = countAnimals;
// console.log(countAnimals({ specie: 'penguins' }));
console.log(getNumberOfAnimals({ specie: 'giraffes' }));
