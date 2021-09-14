const data = require('../data/zoo_data');
const getSpeciesByIds = require('./getSpeciesByIds');

const findEmployee = (info) => {
  const { employees } = data;
  const selectedEmployee = employees.find((employee) => {
    const firstNameIsEqual = info.name === employee.firstName;
    const lastNameIsEqual = info.name === employee.lastName;
    const idIsEqual = info.id === employee.id;
    return (firstNameIsEqual || lastNameIsEqual || idIsEqual);
  });
  return selectedEmployee;
};

const getLocationsBySpecies = (species) => {

};

const getEmployeesCoverage = (infoObj) => {
  const employee = findEmployee(infoObj);
  const { id, firstName, lastName, responsibleFor } = employee;
  const species = responsibleFor.map((specieId) => getSpeciesByIds(specieId)[0].name);
  const locations = getLocationsBySpecies(species);
  //FALTA ARRUMAR ESSAS LOCATIONS AQUI
  return {
    id,
    fullName: `${firstName} ${lastName}`,
    species,
    locations,
  };
};

console.log(getEmployeesCoverage({ id: '0e7b460e-acf4-4e17-bcb3-ee472265db83' }));

module.exports = getEmployeesCoverage;
