const data = require('../data/zoo_data');

function getEmployee(person) {
  return data.employees.find((employee) =>
    (person.name === employee.firstName
    || person.name === employee.lastName
    || person.id === employee.id));
}

function getSpecies(employee) {
  return employee.responsibleFor.map((id) =>
    data.species.find((specie) =>
      (specie.id === id)));
}

function getAllEmployees() {
  return data.employees.map((employee) => {
    const species = getSpecies(employee);
    return {
      id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      species: species.map((specie) => specie.name),
      locations: species.map((specie) => specie.location),
    };
  });
}

function getEmployeesCoverage(person) {
  if (!person) return getAllEmployees();
  const employee = getEmployee(person);
  if (employee === undefined) throw new Error('Informações inválidas');
  const species = getSpecies(employee);
  return {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: species.map((specie) => specie.name),
    locations: species.map((specie) => specie.location),
  };
}

module.exports = getEmployeesCoverage;
