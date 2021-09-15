const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function checkParameters(object) {
  const { id, name } = object;
  let teste;
  if (id) teste = employees.find((employee) => employee.id === id);
  if (name) {
    teste = employees
      .find(({ firstName, lastName }) => firstName === name || lastName === name);
  }
  return teste;
}

function getSpecies(responsibleForId) {
  const animalName = responsibleForId.map((specie) => species.find(({ id }) => id === specie).name);
  return animalName;
}

function getLocation(responsibleFor) {
  const animalLocation = responsibleFor
    .map((specie) => species
      .find(({ id }) => id === specie).location);
  return animalLocation;
}

function getEmployee(object) {
  const { values } = Object;
  return employees
    .find(({ id, firstName, lastName }) => values(object).includes(id)
      || values(object).includes(firstName)
        || values(object).includes(lastName));
}

const objectConstructing = (obj) => {
  const idOrName = checkParameters(obj);
  if (!idOrName) throw new Error('Informações inválidas');
  const objectFinal = {};
  const { id, firstName, lastName, responsibleFor } = getEmployee(obj);
  const speciesName = getSpecies(responsibleFor);
  const speciesLocation = getLocation(responsibleFor);
  Object.assign(objectFinal, {
    id,
    fullName: `${firstName} ${lastName}`,
    species: speciesName,
    locations: speciesLocation,
  });
  return objectFinal;
};

function getAllEmployees() {
  const arrayEmployees = [];
  employees.forEach((employee) => {
    arrayEmployees.push(objectConstructing({ id: employee.id }));
  });
  return arrayEmployees;
}

function getEmployeesCoverage(object) {
  return object ? objectConstructing(object) : getAllEmployees();
}

module.exports = getEmployeesCoverage;
