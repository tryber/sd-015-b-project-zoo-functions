const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getFirstAnimal(param) {
  let result;
  employees.forEach((employee) => {
    if (employee.id === param) {
      result = employee.responsibleFor;
      return result;
    }
  });
  return result[0];
}

function getOlder(callback) {
  let result;
  species.forEach((specie) => {
    if (specie.id === callback) {
      result = specie.residents.reduce((acc, curr) => ((acc.age > curr.age) ? acc : curr));
    }
  });
  const newResult = [...Object.values(result)];
  return newResult;
}

function getOldestFromFirstSpecies(id) {
  // getFirstAnimal(id);
  return getOlder(getFirstAnimal(id));
}

module.exports = getOldestFromFirstSpecies;
