const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // gets id of first species that employee is responsible for
  const employeeAnimal = data.employees.find((element) => element.id === id).responsibleFor[0];
  // gets species that employee is responsible for
  const managed = data.species.find((animal) => animal.id === employeeAnimal);
  // gets oldest resident from species
  const members = managed.residents;
  const oldest = members.reduce((accum, currEl) => {
    let result = 0;
    if (accum.age > currEl.age) {
      result = accum;
    } else {
      result = currEl;
    }
    return result;
  });
  const { name, sex, age } = oldest;
  const myReturn = [name, sex, age];
  return myReturn;
}

module.exports = getOldestFromFirstSpecies;
