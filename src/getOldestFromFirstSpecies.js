const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const PrimeiroAnimal = data.employees.find((element) => element.id === id).responsibleFor[0];
  const AnimalVelho = species.find((elemento) =>
    elemento.id === PrimeiroAnimal).residents.sort((a, b) => b.age - a.age);
  return [AnimalVelho[0].name, AnimalVelho[0].sex, AnimalVelho[0].age];
}

module.exports = getOldestFromFirstSpecies;
