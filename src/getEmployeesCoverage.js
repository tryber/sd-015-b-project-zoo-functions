const data = require('../data/zoo_data');

const { species, employees } = data;

function getAnimalFromKey(key, givenInfo) {
  return species.find((oneSpecies) => oneSpecies[key] === givenInfo);
}

function getAnimalNameFromId(speciesId) {
  const speciesInfo = getAnimalFromKey('id', speciesId);
  return speciesInfo.name;
}

function getLocationsList(coveredSpecies) {
  const locations = [];

  coveredSpecies.forEach((speciesName) => {
    const speciesInfo = getAnimalFromKey('name', speciesName);
    // if (!locations.includes(speciesInfo.location)) {
    locations.push(speciesInfo.location);
    // }
  });

  return locations;
}

function generateEmployeeCoverage(employee) {
  const employeeCoverage = {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: employee.responsibleFor.map((speciesId) => getAnimalNameFromId(speciesId)),
  };

  employeeCoverage.locations = getLocationsList(employeeCoverage.species);

  return employeeCoverage;
}

function IsValidEmployeeName(options) {
  return employees.some((employee) => employee.firstName === options.name
  || employee.lastName === options.name);
}

function getEmployeeByName(options) {
  return employees.find((employee) => employee.firstName === options.name
  || employee.lastName === options.name);
}

function checkEmployeeName(options) {
  if (!IsValidEmployeeName(options)) {
    throw new Error('Informações inválidas');
  }

  return generateEmployeeCoverage(getEmployeeByName(options));
}

function IsValidEmployeeId(options) {
  return employees.some((employee) => employee.id === options.id);
}

function getEmployeeById(options) {
  return employees.find((employee) => employee.id === options.id);
}

function checkEmployeeId(options) {
  if (!IsValidEmployeeId(options)) {
    throw new Error('Informações inválidas');
  }

  return generateEmployeeCoverage(getEmployeeById(options));
}

function getOptions(options) {
  if (options.name) {
    return checkEmployeeName(options);
  }

  if (options.id) {
    return checkEmployeeId(options);
  }
}

function getEmployeesCoverage(options) {
  if (!options) {
    return employees.map((employee) => generateEmployeeCoverage(employee));
  }

  return getOptions(options);
}

console.log(getEmployeesCoverage({ id: 'c1f50212-35a6-4ecd-8223-f835538526c2' }));

module.exports = getEmployeesCoverage;
