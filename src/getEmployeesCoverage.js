const data = require('../data/zoo_data');

function checkExistentId(id) {
  const employeesIds = data.employees.map((employee) => employee.id);
  if (employeesIds.includes(id)) {
    return;
  }
  throw new Error('Informações inválidas');
}

function checkExistentName(name) {
  const employeesFirstName = data.employees.map((employee) => employee.firstName);
  const employeesLastName = data.employees.map((employee) => employee.lastName);
  if (employeesFirstName.includes(name)) {
    return 'firstName';
  } if (employeesLastName.includes(name)) {
    return 'lastName';
  }
  throw new Error('Informações inválidas');
}

function generateObjectPropertys(employee) {
  const returnObj = {};
  const { species } = data;
  const responsSpecies = species.filter((specie) => employee.responsibleFor.includes(specie.id));
  returnObj.id = employee.id;
  returnObj.fullName = `${employee.firstName} ${employee.lastName}`;
  returnObj.species = responsSpecies.map((specie) => specie.name);
  returnObj.locations = responsSpecies.map((specie) => specie.location);
  return returnObj;
}

function checkOptions(options) {
  if (options.id) {
    checkExistentId(options.id);
    const employeeObj = data.employees.find((employee) => employee.id === options.id);
    return generateObjectPropertys(employeeObj);
  }
  if (options.name) {
    const name = checkExistentName(options.name);
    const employeeObj = data.employees.find((employee) => employee[name] === options.name);
    return generateObjectPropertys(employeeObj);
  }
}

function getEmployeesCoverage(options = {}) {
  const hasOptions = checkOptions(options);
  if (hasOptions) return hasOptions;
  return data.employees.map((employee) => generateObjectPropertys(employee));
}

module.exports = getEmployeesCoverage;
