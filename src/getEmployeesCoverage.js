const { species, employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeesCoverage(param) {
  let filterEmployees
  if (!param) {
    // TODO: return coverage from all workers;
    filterEmployees = employees;
    return employees.map((element) => getCoverage(element));
  }
  if (param.name) {
    // TODO: return only the employee with this name
    return employees
      .filter((element) => fullName(element).includes(param.name))
      .map((element) => getCoverage(element));
  }
  if (param.id) {
    // TODO: return only the employee with this id
    return employees
      .filter((element) => element.id === param.id)
      .map((element) => getCoverage(element));
  }
}

function getSpecies(employee) {
  return species.filter((element) =>
    employee.responsibleFor.includes(element.id),
  );
}

function getCoverage(employee) {
  return {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: getSpecies(employee).map((element) => element.name),
    locations: getSpecies(employee).map((element) => element.location),
  };
}

function fullName(employee) {
  return `${employee.firstName} ${employee.lastName}`;
}

module.exports = getEmployeesCoverage;
