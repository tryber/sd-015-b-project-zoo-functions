const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function searchName(name) {
  const key = Object.keys(name);

  return employees.find((e) => key.find((n) => e.firstName === name[n] || e.lastName === name[n]));
}

function searchId(id) {
  const keyId = Object.keys(id);
  return employees.find((employee) => keyId.find((i) => employee.id === id[i]));
}

function getEmployeesVerify(obj) {
  const nameId = Object.keys(obj);
  if (nameId[0] === 'name') return searchName(obj);
  return searchId(obj);
}

function getSpecies(searchSpecies) {
  const responsible = searchSpecies.responsibleFor;
  const keySpecie = Object.keys(responsible);
  return keySpecie.map((curr) => species.filter((specie) => specie.id.includes(responsible[curr])));
}

function createEmployees(obj) {
  const employeeSelected = getEmployeesVerify(obj);
  const animais = getSpecies(employeeSelected);
  const result = {
    id: employeeSelected.id,
    fullName: `${employeeSelected.firstName} ${employeeSelected.lastName}`,
    species: animais.map((an) => an[0].name),
    locations: animais.map((an) => an[0].location),
  };
  return result;
}

function getEmployeesCoverage(obj) {
  // seu código aqui
  if (!obj) {
    return employees.map((employee) => createEmployees({ name: employee.firstName }));
  }
  const employeeSelected = getEmployeesVerify(obj);
  if (!employeeSelected) throw new Error('Informações inválidas');
  return createEmployees(obj);
}

module.exports = getEmployeesCoverage;
