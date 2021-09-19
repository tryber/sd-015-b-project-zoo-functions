// ref: branch flavio-bianchetti-zoo-function
const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getIdFirstSpecie = (id) => employees
  .filter((employee) => employee.id === id)
  .map((employee) => employee.responsibleFor
    .find((value) => value))[0];

const getListResidents = (idSpecie) =>
  species.filter((specie) =>
    specie.id === idSpecie).map((specie) => specie.residents)[0];

const getMostOldFirstSpecie = (idSpecie) =>
  Object.values(getListResidents(idSpecie).filter((res) =>
    res).sort((a, b) => b.age - a.age)[0]);

const findMostOldSpecieFromEmployee = (id) => {
  let result = getIdFirstSpecie(id);
  result = getMostOldFirstSpecie(result);
  return result;
};

function getOldestFromFirstSpecies(id) {
  let result = [];
  if (id) {
    result = findMostOldSpecieFromEmployee(id);
  }
  return result;
}

module.exports = getOldestFromFirstSpecies;
