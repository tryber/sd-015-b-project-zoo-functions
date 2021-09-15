const { employees, species } = require('../data/zoo_data');

function findLocationOfAnimal(animals) {
  const locations = animals.map((animal) => species.find(({ name }) => name === animal).location);

  return locations;
}

function convertAnimalIdInName(speciesIds) {
  const speciesNames = speciesIds.map((specie) => species.find(({ id }) => id === specie).name);

  return speciesNames;
}

function idOrName(identifier) {
  const { id, name } = identifier;
  let employee;

  if (id) employee = employees.find((people) => people.id === id);
  else {
    employee = employees.find(({ firstName, lastName }) => firstName === name || lastName === name);
  }

  return employee;
}

function findEmployeeByIdOrName(identifierType) {
  const employee = idOrName(identifierType);

  if (employee === undefined) throw new Error('Informações inválidas');

  const { firstName, lastName, responsibleFor, id } = employee;
  const speciesName = convertAnimalIdInName(responsibleFor);
  const fullName = `${firstName} ${lastName}`;
  const locations = findLocationOfAnimal(speciesName);
  const infosEmployee = {
    id,
    fullName,
    species: speciesName,
    locations,
  };

  return infosEmployee;
}

function coverageOfAllEmployees() {
  const employeesIds = employees.map(({ id }) => id);
  const infosOfAllEmployees = [];

  employeesIds.forEach((employee) => {
    infosOfAllEmployees.push(findEmployeeByIdOrName({ id: employee }));
  });

  return infosOfAllEmployees;
}

function getEmployeesCoverage(identifier) {
  return (identifier) ? findEmployeeByIdOrName(identifier) : coverageOfAllEmployees();
}

module.exports = getEmployeesCoverage;
