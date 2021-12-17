const { species, employees } = require('../data/zoo_data');

const getAnimalFromKey = (key, givenInfo) => species
  .find((oneSpecies) => oneSpecies[key] === givenInfo);

const getAnimalNameFromId = (speciesId) => getAnimalFromKey('id', speciesId).name;

const getLocationsList = (coveredSpecies) => coveredSpecies
  .reduce((locations, speciesName) => [...locations,
    (getAnimalFromKey('name', speciesName).location)], []);

function generateEmployeeCoverage({ id, firstName, lastName, responsibleFor }) {
  const employeeCoverage = {
    id,
    fullName: `${firstName} ${lastName}`,
    species: responsibleFor.map((speciesId) => getAnimalNameFromId(speciesId)),
  };

  employeeCoverage.locations = getLocationsList(employeeCoverage.species);

  return employeeCoverage;
}

const isValidEmployeeName = (name) => employees
  .some(({ firstName, lastName }) => firstName === name || lastName === name);

const getEmployeeByName = (name) => employees
  .find(({ firstName, lastName }) => firstName === name || lastName === name);

function checkEmployeeName(name) {
  if (!isValidEmployeeName(name)) {
    throw new Error('Informações inválidas');
  }

  return generateEmployeeCoverage(getEmployeeByName(name));
}

const isValidEmployeeId = (id) => employees.some((employee) => employee.id === id);

const getEmployeeById = (id) => employees.find((employee) => employee.id === id);

function checkEmployeeId(id) {
  if (!isValidEmployeeId(id)) {
    throw new Error('Informações inválidas');
  }

  return generateEmployeeCoverage(getEmployeeById(id));
}

function getOptions({ name, id }) {
  if (name) {
    return checkEmployeeName(name);
  }

  if (id) {
    return checkEmployeeId(id);
  }
}

const getEmployeesCoverage = (options) => (options
  ? getOptions(options) : employees.map((employee) => generateEmployeeCoverage(employee)));

module.exports = getEmployeesCoverage;
