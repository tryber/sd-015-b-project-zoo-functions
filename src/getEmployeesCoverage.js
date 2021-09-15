const { species, employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function checkParameters(object) {
  const { id, name } = object;
  let employeeInfos;
  if (id) employeeInfos = employees.find((person) => person.id === id);
  if (name) {
    employeeInfos = employees
      .find(({ firstName, lastName }) => firstName === name || lastName === name);
  }
  return employeeInfos;
}

function getEmployee(object) {
  return employees.find(({ id, firstName, lastName }) => Object.values(object).includes(id)
    || Object.values(object).includes(firstName)
    || Object.values(object).includes(lastName));
}

function getSpecies(responsibleFor) {
  const getNameById = responsibleFor.map((specie) => species.find(({ id }) => id === specie).name);
  return getNameById;
}

function getLocation(responsibleFor) {
  const locations = responsibleFor.map((specie) => species
    .find(({ id }) => id === specie).location);
  return locations;
}

function objectConstructing(object) {
  const employee = checkParameters(object);
  if (!employee) throw new Error('Informações inválidas');
  const obj = {};
  const { id, firstName, lastName, responsibleFor } = getEmployee(object);
  const speciesName = getSpecies(responsibleFor);
  const animalLocation = getLocation(responsibleFor);
  Object.assign(obj, {
    id,
    fullName: `${firstName} ${lastName}`,
    species: speciesName,
    locations: animalLocation,
  });

  return obj;
}

function getAllEmployees() {
  const allEmployees = [];
  employees.forEach((employee) => {
    allEmployees.push(objectConstructing({ id: employee.id }));
  });
  return allEmployees;
}

function getEmployeesCoverage(object) {
  return object ? objectConstructing(object) : getAllEmployees();
}

module.exports = getEmployeesCoverage;
