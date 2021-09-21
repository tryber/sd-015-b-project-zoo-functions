const data = require('../data/zoo_data');
const { species, employees } = require('../data/zoo_data');

function findEmployee(employee) {
  const getEmployee = employees.find((inputedId) => inputedId.id === employee.id
  || inputedId.firstName === employee.name
  || inputedId.lastName === employee.name);
  if (typeof getEmployee === 'undefined') {
    throw new Error('Informações inválidas');
  }
  return getEmployee;
}

function getSpeciesFromEmployee(employee) {
  const speciesFilter = species.filter((specie) => employee.includes(specie.id));
  return speciesFilter;
}
function objectCreator(employee, animal) {
  const createdObject = {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: animal.map((specie) => specie.name),
    locations: animal.map((locations) => locations.location),
  };
  return createdObject;
}

function getEmployeesCoverage(id) {
  if (typeof id === 'undefined') {
    const allEmployees = [];
    employees.forEach((employee) => {
      allEmployees.push(objectCreator(employee, getSpeciesFromEmployee(employee.responsibleFor)));
    });
    return allEmployees;
  }
  const getEmployees = findEmployee(id);
  const employeeResponsibleFor = getEmployees.responsibleFor;
  const getSpecieEmployeeAndLocal = getSpeciesFromEmployee(employeeResponsibleFor);

  return objectCreator(getEmployees, getSpecieEmployeeAndLocal);
}
console.log(getEmployeesCoverage({ name: 'Sharonda' }));
module.exports = getEmployeesCoverage;
