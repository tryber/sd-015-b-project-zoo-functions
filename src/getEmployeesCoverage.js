const data = require('../data/zoo_data');

const { species, employees } = data;

function getAnimals(employee) {
  const animalIds = employee.responsibleFor;
  const animals = [];
  animalIds.forEach((id) => animals.push(species.find((animal) => animal.id === id).name));
  return animals;
}

function getLocations(animals) {
  return animals.map((animal) => species.find((specie) => specie.name === animal).location);
}

function getReport(employee) {
  return employee.map((e) => {
    const result = { id: e.id };
    result.fullName = `${e.firstName} ${e.lastName}`;
    result.species = getAnimals(e);
    result.locations = getLocations(result.species);
    return result;
  });
}

function findEmployee(info) {
  const emp = employees.filter((e) => e.firstName === info || e.lastName === info || e.id === info);
  return getReport(emp)[0];
}

function checkName(name) {
  if (employees.some((employee) => employee.firstName === name || employee.lastName === name)) {
    return findEmployee(name);
  } throw new Error('Informações inválidas');
}

function checkId(id) {
  if (employees.some((employee) => employee.id === id)) {
    return findEmployee(id);
  } throw new Error('Informações inválidas');
}

function handleInfo(empInfo) {
  if (empInfo.name) {
    return checkName(empInfo.name);
  } if (empInfo.id) {
    return checkId(empInfo.id);
  }
}

function getEmployeesCoverage(employeeInfo) {
  if (employeeInfo) {
    return handleInfo(employeeInfo);
  }
  if (!employeeInfo) {
    return employees.map((employee) => handleInfo({ id: employee.id }));
  }
}

console.log(getEmployeesCoverage());
// console.log(getEmployeesCoverage({ id: 'c1f50212-35a6-4ecd-8223-f835538526c2' }));
// console.log(getEmployeesCoverage({ name: 'Stephanie' }));

module.exports = getEmployeesCoverage;
