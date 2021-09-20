const data = require('../data/zoo_data');

const employeesAnimals = (id) => {
  const animals = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  return animals;
};

const oldestAnimals = (id) => {
  const oldAnimal = data.species.find((element) => employeesAnimals(id) === element.id).residents
    .reduce((accumulator, element) => {
      if (element.age > accumulator.age) return element;
      return accumulator;
    });
  // console.log(animalvelho);
  const { name, sex, age } = oldAnimal;
  return [name, sex, age];
};

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  employeesAnimals(id);
  const oldest = oldestAnimals(id);

  return oldest;
}

// employeesAnimals('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1');
// oldestAnimals('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1');
getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1');

module.exports = getOldestFromFirstSpecies;
