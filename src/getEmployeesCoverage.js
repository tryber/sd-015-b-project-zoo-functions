const data = require('../data/zoo_data');

const { species, employees } = data;

function getParameters(employeeFound) {
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

function getEmployeesCoverage(myEmployee) {
  // seu código aqui
  if (myEmployee === undefined) {
    return employees.map((element) => createObjectCoverage(...getParameters(element)));
  }

  const { name: employeeName, id: employeeId } = myEmployee;

  const arrayOfIds = employees.map((obj) => obj.id);
  const arrayOfNames = employees
    .map((obj) => [obj.firstName, obj.lastName])
    .reduce((acc, curVal) => acc.concat(curVal));
  if (
    (employeeName !== undefined && arrayOfNames.includes(employeeName) === false)
    || (employeeId !== undefined && arrayOfIds.includes(employeeId) === false)
  ) {
    throw new Error('Informações inválidas');
  }

  const findEmployee = employees.find(
    ({ id, firstName, lastName }) =>
      id === employeeId || firstName === employeeName || lastName === employeeName,
  );
  return createObjectCoverage(...getParameters(findEmployee));
}

console.log(getEmployeesCoverage());

module.exports = getEmployeesCoverage;
