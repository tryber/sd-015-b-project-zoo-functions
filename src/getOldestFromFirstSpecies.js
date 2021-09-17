const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const firstEmployee = data.employees.find((employee) => employee.id === id);
  const firstAnimal = firstEmployee.responsibleFor[0];
  const animalGroup = data.species.find((animal) => animal.id === firstAnimal);
  const oldest = animalGroup.residents.reduce((acc, curr) => {
    if (acc.age > curr.age) return acc;
    return curr;
  });
  const { age, name, sex } = oldest;
  return [name, sex, age];
}

module.exports = getOldestFromFirstSpecies;
