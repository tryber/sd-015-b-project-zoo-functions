const data = require('../data/zoo_data');

const getSpeciesByIds = require('./getSpeciesByIds');

const { employees } = data;

const getEmployee = ({ name: receivedName, id: receivedId }) => {
  const foundedEmployee = employees.find((employee) => (employee.firstName === receivedName
    || employee.lastName === receivedName || employee.id === receivedId));
  if (!foundedEmployee) {
    throw new Error('Informações inválidas');
  }
  return foundedEmployee;
};

const findEmployeeLocations = (receivedIdsOfSpecies) => receivedIdsOfSpecies.map((idOfSpecie) =>
  idOfSpecie.map((specie) => specie.location).join(','));

const findNamesOfSpeciesOfEmployeeCoverage = (receivedIdsOfSpecies) =>
  receivedIdsOfSpecies.map((idOfSpecie) => idOfSpecie.map((specie) => specie.name).join(','));

const isResponsibleFor = (employee) => {
  const groupOfTheResponsibility = getEmployee(employee).responsibleFor;
  const theIdsOfSpecies = groupOfTheResponsibility.map((specie) => getSpeciesByIds(specie));
  return theIdsOfSpecies;
};

const getCoverage = (receivedEmployee) => {
  const employeeData = getEmployee(receivedEmployee);
  const employeeId = employeeData.id;
  const fullName = `${employeeData.firstName} ${employeeData.lastName}`;
  const responsibility = isResponsibleFor(receivedEmployee);
  const namesOfSpecies = findNamesOfSpeciesOfEmployeeCoverage(responsibility);
  const locationsOfSpecies = findEmployeeLocations(responsibility);
  return { id: employeeId, fullName, species: namesOfSpecies, locations: locationsOfSpecies };
};

function getEmployeesCoverage(receivedEmployee) {
  if (receivedEmployee === undefined) {
    const coveragesOfEmployees = [];
    employees.forEach((employee) => {
      const thisCoverage = getCoverage(employee);
      coveragesOfEmployees.push(thisCoverage);
    });
    return coveragesOfEmployees;
  }
  return getCoverage(receivedEmployee);
}
console.log(getEmployeesCoverage({ name: 'Sharonda' }));
console.log(getEmployeesCoverage());

module.exports = getEmployeesCoverage;
