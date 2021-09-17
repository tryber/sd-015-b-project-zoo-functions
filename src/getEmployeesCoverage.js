const data = require('../data/zoo_data');

// fonte: usei como base o exercício de https://github.com/tryber/sd-015-b-project-zoo-functions/blob/annie-haurani-zoo-functions/src/getEmployeesCoverage.js
function getEmployee(person) {
  return data.employees.find((employee) => (person.name === employee.firstName
    || person.name === employee.lastName || person.id === employee.id));
}

function getSpecie(employee) {
  return employee.responsibleFor.map((id) =>
    data.species.find((specie) =>
      (specie.id === id)));
}

function getAllEmployees() {
  return data.employees.map((employee) => {
    const species = getSpecie(employee);
    return {
      id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      species: species.map((specie) => specie.name),
      locations: species.map((specie) => specie.location),
    };
  });
}

function getEmployeesCoverage(input) {
  if (!input) return getAllEmployees();
  const employee = getEmployee(input);
  if (employee === undefined) throw new Error('Informações inválidas');
  const species = getSpecie(employee);
  return {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: species.map((specie) => specie.name),
    locations: species.map((specie) => specie.location),
  };
}

module.exports = getEmployeesCoverage;
