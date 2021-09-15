const { species, employees } = require('../data/zoo_data');

const getAnimalNames = (responsableAnimals) =>
  responsableAnimals.map((animalId) => species.find(({ id }) => animalId === id).name);

const getLocations = (responsableAnimals) =>
  responsableAnimals.map((animalId) => species.find(({ id }) => animalId === id).location);

const getEmployeeInfo = (searchToken) => {
  const { id, firstName, lastName, responsibleFor } = employees.find((employee) =>
    Object.values(employee).includes(searchToken));

  if (typeof id === 'undefined') throw new Error('Informações inválidas');

  return {
    id,
    fullName: `${firstName} ${lastName}`,
    species: getAnimalNames(responsibleFor),
    locations: getLocations(responsibleFor),
  };
};

const isTokenValid = (searchToken) =>
  employees.some((employee) => Object.values(employee).includes(searchToken));

function getEmployeesCoverage(options) {
  if (typeof options === 'undefined') return employees.map(({ id }) => getEmployeeInfo(id));

  const [searchToken] = Object.values(options);

  if (isTokenValid(searchToken) === false) throw new Error('Informações inválidas');

  return getEmployeeInfo(searchToken);
}

module.exports = getEmployeesCoverage;
