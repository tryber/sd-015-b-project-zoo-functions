// const { name } = require('faker');
const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function convertAnimalIdToName(arrayIds) {
  const filteredSpecie = species.filter((specie) => arrayIds.includes(specie.id));
  const arrayAnimalName = filteredSpecie.map((specie) => {
    let result = '';
    result += specie.name;
    return result;
  });
  return arrayAnimalName;
}

function findLocations(animalNames) {
  const filteredLocations = species.filter((specie) => animalNames.includes(specie.name));
  const arrayOfLocations = filteredLocations.map((specie) => {
    let result = '';
    result += specie.location;
    return result;
  });
  return arrayOfLocations;
}

function returnWhithoutParam() {
  return employees.map(({ id, firstName, lastName, responsibleFor }) => ({
    id,
    fullName: `${firstName} ${lastName}`,
    species: convertAnimalIdToName(responsibleFor),
    locations: findLocations(convertAnimalIdToName(responsibleFor)),
  }));
}

function filteredEmployee(object) {
  const allEmployees = returnWhithoutParam();
  const value = Object.values(object)[0];
  const finderEmploye = allEmployees.find((employee) => employee.fullName.includes(value)
    || employee.id.includes(value));
  if (!finderEmploye) throw new Error('Informações inválidas');
  return finderEmploye;
}

function getEmployeesCoverage(object = undefined) {
  if (!object) return returnWhithoutParam();
  return filteredEmployee(object);
}

module.exports = getEmployeesCoverage;
