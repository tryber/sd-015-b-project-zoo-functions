// ref: branch flavio-bianchetti-zoo-function
const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getFirstAnimal = (id) => employees
  .filter((employee) => id === employee.id)
  .map((employee) => employee.responsibleFor
    .find((value) => value))[0];

const getResidents = (idAnimal) => species
  .filter((specie) => idAnimal === specie.id)
  .map((specie) => specie.residents)[0];

const getOldestAnimal = (idAnimal) => Object.values(getResidents(idAnimal)
  .filter((residents) => residents)
  .sort((a, b) => b.age - a.age)[0]);

const findOldestAnimal = (id) => {
  let result = getFirstAnimal(id);
  result = getOldestAnimal(result);
  return result;
};

function getOldestFromFirstSpecies(id) {
  let result = [];
  if (id) {
    result = findOldestAnimal(id);
  }
  return result;
}

console.log(getOldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = getOldestFromFirstSpecies;
