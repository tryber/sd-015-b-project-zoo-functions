const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui

  if (!id) return console.log('Insira um id!');

  const employee = employees.find((employeeId) => employeeId.id === id);
  const animals = employee.responsibleFor;
  const getFirstAnimal = species.find((specie) => specie.id === animals[0]);
  const getOldestAnimal = getFirstAnimal.residents.sort((a, b) => b.age - a.age);

  return [getOldestAnimal[0].name, getOldestAnimal[0].sex, getOldestAnimal[0].age];
}
module.exports = getOldestFromFirstSpecies;
