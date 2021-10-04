const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployee(person) {
  return employees.find((employee) =>
    (person.name === employee.firstName
    || person.name === employee.lastName
    || person.id === employee.id));
}

function foundSpecies(employee) {
  return employee.responsibleFor.map((id) =>
    data.species.find((specie) =>
      (specie.id === id)));
}

function foundEmployees() {
  return data.employees.map((employee) => {
    const species = foundSpecies(employee);
    return {
      id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      species: species.map((specie) => specie.name),
      locations: species.map((specie) => specie.location),
    };
  });
}

function getEmployeesCoverage(person) {
  if (!person) return foundEmployees();
  const employee = getEmployee(person);
  if (employee === undefined) throw new Error('Informações inválidas');
  const species = foundSpecies(employee);
  return {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: species.map((specie) => specie.name),
    locations: species.map((specie) => specie.location),
  };
}

module.exports = getEmployeesCoverage;
