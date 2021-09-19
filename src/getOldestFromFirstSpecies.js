const data = require('../data/zoo_data');

const { employees, species } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const employee = employees.find((element) => element.id === id);
  const animals = employee.responsibleFor;
  const firstAnimal = species.find((element) => element.id === animals[0]);
  const sortAnimal = firstAnimal.residents.sort((a, b) => b.age - a.age);
  return [sortAnimal[0].name, sortAnimal[0].sex, sortAnimal[0].age];
}

module.exports = getOldestFromFirstSpecies;
