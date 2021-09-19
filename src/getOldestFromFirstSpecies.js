// ref: branch flavio-bianchetti-zoo-function

const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getFirstAnimal = (id) => employees
  .filter((employee) => id === employee.id)
  .map((employee) => employee.responsibleFor
    .find((value) => value))[0];

const getResidents = (animals) => species
  .filter((specie) => animals === specie.id)
  .map((specie) => specie.residents)[0];

const oldestAnimal = (idAnimal) => Object.value(getResidents(idAnimal)
  .filter((residents) => residents).sort((a, b) => b.age - a.age)[0]);

const getOldesAnimal = (id) => {
  let result = getFirstAnimal(id);
  result = oldestAnimal(result);
  return result;
};

function getOldestFromFirstSpecies(id) {
  let result = [];
  if (id) {
    result = getOldesAnimal(id);
  }
  return result;
}

module.exports = getOldestFromFirstSpecies;
