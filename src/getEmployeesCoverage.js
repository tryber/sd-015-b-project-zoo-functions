const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getEmployee = (obj) => {
  const { values } = Object;
  return employees.find(({ id, firstName, lastName }) =>
    values(obj).includes(id)
    || values(obj).includes(firstName)
    || values(obj).includes(lastName));
};

const getSpeciesName = (obj) => getEmployee(obj).responsibleFor
  .map((specie) => species
    .find(({ id }) => id === specie).name);

const getSpeciesLocation = (obj) => getEmployee(obj).responsibleFor
  .map((specie) => species
    .find(({ id }) => id === specie).location);

const objectConstructing = (obj) => {
  const object = {};
  const { id, firstName, lastName } = getEmployee(obj);
  Object.assign(object, {
    id,
    fullName: `${firstName} ${lastName}`,
    species: getSpeciesName(obj),
    locations: getSpeciesLocation(obj),
  });
  return object;
};

function getEmployeesCoverage(obj) {
  return objectConstructing(obj);
}

console.log(getEmployeesCoverage({ name: 'Sharonda' }));
// console.log(getEmployeesCoverage({ name: 'Spry' }));
// console.log(getEmployeesCoverage({ id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad' }));

module.exports = getEmployeesCoverage;
