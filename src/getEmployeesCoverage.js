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
  if (!selectedEmployee) {
    throw new Error('Informações inválidas');
  }
  return selectedEmployee;
};

const getLocationsBySpecies = (speciesToFind) => {
  const locationsArray = speciesToFind.reduce((acc, specieName) => {
    const currentSpecie = data.species.find((specie) => specie.name === specieName);
    acc.push(currentSpecie.location);
    return acc;
  }, []);
  return locationsArray;
};

const createEmployeeObject = (employee) => {
  const { id, firstName, lastName, responsibleFor } = employee;
  const species = responsibleFor.map((specieId) => getSpeciesByIds(specieId)[0].name);
  const locations = getLocationsBySpecies(species);
  return {
    id,
    fullName: `${firstName} ${lastName}`,
    species,
    locations,
  };
};

const getEmployeesCoverage = (infoObj) => {
  if (!infoObj) {
    const { employees } = data;
    const employeesList = employees.map((employee) => createEmployeeObject(employee));
    return employeesList;
  }
  const employee = findEmployee(infoObj);
  return createEmployeeObject(employee);
};

module.exports = getEmployeesCoverage;
