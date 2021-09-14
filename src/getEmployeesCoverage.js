const data = require('../data/zoo_data');

function getParameters(employeeFound) {
  const { species } = data;
  const { id, firstName, lastName, responsibleFor } = employeeFound;

  const fullName = `${firstName} ${lastName}`;
  const getSpecies = responsibleFor.map(
    (animal) => species.find((obj) => obj.id.includes(animal)).name,
  );
  const getLocations = responsibleFor.map(
    (animal) => species.find((obj) => obj.id.includes(animal)).location,
  );

  return [id, fullName, getSpecies, getLocations];
}

const createObjectCoverage = (id, fullName, species, locations) => ({
  id,
  fullName,
  species,
  locations,
});

function everyEmployeeCoverage(element) {
  return createObjectCoverage(...getParameters(element));
}

function getArrayOfNames(obj) {
  return [obj.firstName, obj.lastName];
}

function flattenArray(acc, curVal) {
  return acc.concat(curVal);
}

function isValid(myEmployee) {
  const { name: employeeName, id: employeeId } = myEmployee;
  const { employees } = data;

  const arrayOfIds = employees.map((obj) => obj.id);
  const arrayOfNames = employees.map(getArrayOfNames).reduce(flattenArray);

  return (
    (employeeName !== undefined && arrayOfNames.includes(employeeName))
    || (employeeId !== undefined && arrayOfIds.includes(employeeId))
  );
}

function getEmployeesCoverage(myEmployee) {
  const { employees } = data;
  if (myEmployee === undefined) {
    return employees.map(everyEmployeeCoverage);
  }

  if (isValid(myEmployee)) {
    const { name: employeeName, id: employeeId } = myEmployee;
    const findEmployee = employees.find(
      ({ id, firstName, lastName }) =>
        id === employeeId || firstName === employeeName || lastName === employeeName,
    );
    return createObjectCoverage(...getParameters(findEmployee));
  }
  throw new Error('Informações inválidas');
}

module.exports = getEmployeesCoverage;
