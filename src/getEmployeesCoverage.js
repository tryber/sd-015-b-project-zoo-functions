const data = require('../data/zoo_data');

function getEmployee(person) {
  return data.employees.find((elem) => (person.name === elem.firstName
    || person.name === elem.lastName
    || person.id === elem.id));
}

function getSpecies(employee) {
  return employee.responsibleFor.map((id) =>
    data.species.find((specie) =>
      (specie.id === id)));
}

function getAllEmployees() {
  return data.employees.map((elem) => {
    const species = getSpecies(elem);
    return {
      id: elem.id,
      fullName: `${elem.firstName} ${elem.lastName}`,
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
console.log(getEmployeesCoverage());
module.exports = getEmployeesCoverage;
