const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpecies(employeeID) {
  const speciesID = employees.filter(
    (employee) => employee.id.includes(employeeID),
  )[0].responsibleFor;
  const speciesName = speciesID.map((id) => species.filter((specie) => specie.id.includes(id)));
  return speciesName.map((animal) => animal[0].name);
}

function getLocations(speciesName) {
  const Locations = speciesName.map(
    (animal) => species.filter((specie) => specie.name.includes(animal)),
  );
  return Locations.map((animal) => animal[0].location);
}

function getAllEmployeerCoverage() {
  return employees.map((employee) => ({
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: getSpecies(employee.id),
    locations: getLocations(getSpecies(employee.id)),
  }));
}

function verificationError(nameOrId) {
  const verify1 = employees.some((employee) => Object.values(employee).includes(nameOrId.id));
  const verify2 = employees.some((employee) => Object.values(employee).includes(nameOrId.name));
  if (verify1 === false && verify2 === false) {
    return false;
  }
}

function getEmployeesCoverage(nameOrId) {
  if (nameOrId === undefined) {
    return getAllEmployeerCoverage();
  }
  if (verificationError(nameOrId) === false) {
    throw new Error('Informações inválidas');
  }
  const getEmployee = employees.filter(
    (employee) => Object.values(employee).includes(Object.values(nameOrId)[0]),
  );
  return {
    id: getEmployee[0].id,
    fullName: `${getEmployee[0].firstName} ${getEmployee[0].lastName}`,
    species: getSpecies(getEmployee[0].id),
    locations: getLocations(getSpecies(getEmployee[0].id)),
  };
}

module.exports = getEmployeesCoverage;
