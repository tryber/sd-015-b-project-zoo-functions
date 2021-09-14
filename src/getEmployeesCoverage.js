const { employees, species } = require('../data/zoo_data');

const findEmployeeByNameOrId = (target) => employees.find(({ id, firstName, lastName }) =>
  target === id
  || `${firstName} ${lastName}`.includes(target));

const getAnimalById = (id) => species.find((specie) => specie.id === id);

const getAnimalsNamesById = (ids) => species
  .filter(({ id }) => ids.includes(id))
  .map(({ name }) => name);

const getAnimalsLocations = (ids) => {
  const locations = [];
  ids.forEach((specieId) => {
    const { location } = getAnimalById(specieId);
    locations.push(location);
  });
  return locations;
};

const createCoverage = ({ id, firstName, lastName, responsibleFor }, type) =>
  ({
    id,
    fullName: `${firstName} ${lastName}`,
    species: getAnimalsNamesById(responsibleFor),
    locations: getAnimalsLocations(responsibleFor),
  });

const getEmployeeCoverage = (value) => {
  const target = Object.values(value)[0];
  const employee = findEmployeeByNameOrId(target);

  if (!employee) throw new Error('Informações inválidas');
  return createCoverage(employee);
};

const getAllCoverage = () => employees.map((employee) => createCoverage(employee));

function getEmployeesCoverage(target) {
  // seu código aqui
  const coverage = !target ? getAllCoverage() : getEmployeeCoverage(target);
  return coverage;
}

module.exports = getEmployeesCoverage;
