const { employees, species } = require('../data/zoo_data');

function findLocationOfAnimal(animals) {
  const locations = animals.map((animal) => species
    .find((specie) => specie.name === animal).location);

  return locations;
}

function convertAnimalIdInName(ids) {
  const names = ids.map((id) => species
    .find((specie) => specie.id === id).name);

  return names;
}

function idOrName(identifier) {
  let employee;

  if (identifier.id) {
    employee = employees.find((people) => people.id === identifier.id);
  } else {
    employee = employees.find((people) =>
      people.firstName === identifier.name || people.lastName === identifier.name);
  }

  return employee;
}

function findByEmployeeIdOrName(identifierType) {
  const employee = idOrName(identifierType);
  if (employee === undefined) throw new Error('Informações inválidas');
  const { firstName, lastName, responsibleFor, id } = employee;
  const speciesName = convertAnimalIdInName(responsibleFor);
  const fullName = `${firstName} ${lastName}`;
  const locations = findLocationOfAnimal(speciesName);
  const output = {
    id,
    fullName,
    species: speciesName,
    locations,
  };
  return output;
}

function coverageOfAllEmployees() {
  const employeesIds = employees.map((employee) => employee.id);
  const output = [];

  employeesIds.forEach((employee) => {
    output.push(findByEmployeeIdOrName({ id: employee }));
  });

  return output;
}

function getEmployeesCoverage(identifier) {
  if (!identifier) return coverageOfAllEmployees();

  return findByEmployeeIdOrName(identifier);
}

module.exports = getEmployeesCoverage;
