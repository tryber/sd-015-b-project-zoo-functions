const data = require('../data/zoo_data');

function getEmployee(object) {
  const employeeFirstName = data.employees.find((employee) => (object.name === employee.firstName));
  const employeeLastName = data.employees.find((employee) => (object.name === employee.lastName));
  const employeeId = data.employees.find((employee) => (object.id === employee.id));
  if (employeeFirstName !== undefined) return employeeFirstName;
  if (employeeLastName !== undefined) return employeeLastName;
  if (employeeId !== undefined) return employeeId;
}

function getOneEmployee(object) {
  const employee = getEmployee(object);
  if (!employee) throw new Error('Informações inválidas');
  const animals = data.species.filter((specie) => employee.responsibleFor.includes(specie.id));
  const species = [];
  const locations = [];
  animals.forEach((animal) => {
    species.push(animal.name);
    locations.push(animal.location);
  });
  return ({
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species,
    locations,
  });
}

function listAllCoverage() {
  const allEmployee = [];
  data.employees.forEach((employee) => {
    allEmployee.push(getOneEmployee({ name: employee.firstName }));
  });
  return allEmployee;
}

function getEmployeesCoverage(object) {
  if (!object) return listAllCoverage();
  return getOneEmployee(object);
}

console.log(getEmployeesCoverage({ name: 'Nelson' }));

module.exports = getEmployeesCoverage;
