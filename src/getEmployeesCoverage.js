const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getFullName(employee) {
  return `${employee.firstName} ${employee.lastName}`;
}

function filteredEmployeesByName(param) {
  return employees.filter((element) =>
    getFullName(element).includes(param.name));
}

function filteredEmployeesById(param) {
  return employees.filter((element) => element.id === param.id);
}

function getSpecies(employee) {
  return species.filter((element) =>
    employee.responsibleFor.includes(element.id));
}

function getCoverage(workers) {
  return workers.map((person) => {
    const getAllSpecies = getSpecies(person);
    return {
      id: person.id,
      fullName: `${person.firstName} ${person.lastName}`,
      species: getAllSpecies.map((specie) => specie.name),
      locations: getAllSpecies.map((specie) => specie.location),
    };
  });
}

function getFilteredEmployees(param) {
  let filteredEmployees = [];
  if (!param) filteredEmployees = employees;
  if (param.name) filteredEmployees = filteredEmployeesByName(param);
  if (param.id) filteredEmployees = filteredEmployeesById(param);

  return filteredEmployees;
}

function getEmployeesCoverage(param) {
  const filteredEmployees = getFilteredEmployees(param);
  if (filteredEmployees.length === 0) {
    throw new Error('Informações inválidas');
  }

  const results = getCoverage(filteredEmployees);
  return results.length === 1 ? results[0] : results;
}

module.exports = getEmployeesCoverage;
