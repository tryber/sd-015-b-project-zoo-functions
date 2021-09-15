const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployee(person) {
  return employees.find(({ firstName, lastName, id }) =>
    firstName === person.name || lastName === person.name || id === person.id);
}
function getSpecies(employee) {
  return employee.responsibleFor.map((id) => species.find((specie) => specie.id === id));
}

function getSingleEmployee(person) {
  const employee = getEmployee(person);
  if (!employee) throw new Error('Informações inválidas');
  const employeeSpecies = getSpecies(employee);
  return {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: employeeSpecies.map(({ name }) => name),
    locations: employeeSpecies.map(({ location }) => location),
  };
}

console.log(getSingleEmployee({ name: 'Sharonda' }));

function getAllEmployees() {
  const allEmployees = [];
  employees.forEach(({ firstName }) => {
    allEmployees.push(getSingleEmployee({ name: firstName }));
  });
  return allEmployees;
}

console.log(getAllEmployees());
function getEmployeesCoverage(person) {
  if (!person) return getAllEmployees();
  return getSingleEmployee(person);
}

getEmployeesCoverage({ name: 'Sharonda' });

module.exports = getEmployeesCoverage;
