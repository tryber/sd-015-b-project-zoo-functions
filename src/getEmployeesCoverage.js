const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function findSpecies(animals) {
  const arrayOfSpecies = [];
  animals.forEach((idSpecie) => {
    const verifyId = species.find((animal) => (animal.id === idSpecie));
    arrayOfSpecies.push(verifyId.name);
  });
  return arrayOfSpecies;
}

function findLocation(animals) {
  const arrayOfSpecies = [];
  animals.forEach((idSpecie) => {
    const verifyId = species.find((animal) => (animal.id === idSpecie));
    arrayOfSpecies.push(verifyId.location);
  });
  return arrayOfSpecies;
}

function convertInCoverage(employee) {
  const { id, firstName, lastName, responsibleFor } = employee;
  const coverage = {
    id,
    fullName: `${firstName} ${lastName}`,
    species: findSpecies(responsibleFor),
    locations: findLocation(responsibleFor),
  };
  return coverage;
}

function getByFirstNameOrLastName(nameData) {
  const dataEmployees = data.employees;
  const isFirstName = dataEmployees.find((employee) => employee.firstName === nameData.name);
  if (isFirstName === undefined) {
    const isLastName = dataEmployees.find((employee) => employee.lastName === nameData.name);
    return isLastName;
  }
  return isFirstName;
}

function getById(idData) {
  const dataEmployees = data.employees;
  const employeeData = dataEmployees.find((employee) => employee.id === idData.id);
  return employeeData;
}

function getAllEmployees() {
  const arrayOfEmployees = [];
  data.employees.forEach((employee) => {
    const coverage = convertInCoverage(employee);
    arrayOfEmployees.push(coverage);
  });
  return arrayOfEmployees;
}

function isAnError(maybeError) {
  if (maybeError === undefined) throw new Error('Informações inválidas');
  return convertInCoverage(maybeError);
}

function searchEmployee(obj) {
  if (typeof obj === 'object') {
    if (Object.prototype.hasOwnProperty.call(obj, 'name')) {
      const employee = getByFirstNameOrLastName(obj);
      return isAnError(employee);
    }
    if (Object.prototype.hasOwnProperty.call(obj, 'id')) {
      const employee = getById(obj);
      return isAnError(employee);
    }
  }
  return getAllEmployees();
}

function getEmployeesCoverage(employeeData) {
  // seu código aqui
  return searchEmployee(employeeData);
}

module.exports = getEmployeesCoverage;
