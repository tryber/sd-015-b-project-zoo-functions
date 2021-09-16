const { employees, species } = require('../data/zoo_data');

const data = require('../data/zoo_data');

function verifyParameter(object) {
  const { name, id } = object;
  const findEmployee = employees.find((employee) =>
    employee.firstName === name || employee.lastName === name || employee.id === id);
  return findEmployee;
}

function getSpecies(object) {
  return verifyParameter(object).responsibleFor
    .map((responsible) => species
      .find((specie) => specie.id === responsible).name);
}

function getLocation(object) {
  return verifyParameter(object).responsibleFor
    .map((responsible) => species
      .find((specie) => specie.id === responsible).location);
}

function returnName(object) {
  if (!verifyParameter(object)) throw new Error('Informações inválidas');
  const { id, firstName, lastName } = verifyParameter(object);
  const newObject = {
    id,
    fullName: `${firstName} ${lastName}`,
    species: getSpecies(object),
    locations: getLocation(object),
  };
  return newObject;
}

function noParameter() {
  const arrNoParameter = [];
  employees.forEach((employee) => arrNoParameter.push(returnName({ id: employee.id })));
  return arrNoParameter;
}

function getEmployeesCoverage(object) {
  if (!object) return noParameter();
  return returnName(object);
}

module.exports = getEmployeesCoverage;
