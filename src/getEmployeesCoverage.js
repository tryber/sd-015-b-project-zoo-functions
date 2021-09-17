const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function findPerson(searchParameter) {
  if (typeof searchParameter === 'string') return employees.find((e) => e.id === searchParameter);

  const { id, name } = searchParameter;
  const employeeId = employees.find((e) => e.id === id);
  if (id) return employeeId;

  const employeeName = employees.find((e) => e.firstName === name || e.lastName === name);
  if (name) return employeeName;
}

function getSpeciesNames(speciesIds) {
  const names = [];
  speciesIds.forEach((animalID) => species.filter(({ id }) => id === animalID)
    .map((sp) => names.push(sp.name)));
  return names;
}

function getLocations(speciesNames) {
  const loc = [];
  speciesNames.forEach((nam) => species.filter((sp) => {
    if (sp.name === nam) loc.push(sp.location);
    return 'error';
  }));
  return loc;
}

function displaySpecificEmployeeCoverage(searchParameter) {
  const e = findPerson(searchParameter);
  if (!e) throw new Error('Informações inválidas');

  const fullName = `${e.firstName} ${e.lastName}`;
  const speciesNames = getSpeciesNames(e.responsibleFor);
  const locations = getLocations(speciesNames);

  return {
    id: e.id,
    fullName,
    species: speciesNames,
    locations,
  };
}

function getAllEmployeesData() {
  const allEmployeesId = employees.map(({ id }) => id);
  const result = [];
  allEmployeesId.forEach((id) => result.push(displaySpecificEmployeeCoverage(id)));

  return result;
}
console.log(getAllEmployeesData());

function getEmployeesCoverage(searchParameter) {
  if (!searchParameter) return getAllEmployeesData();

  return displaySpecificEmployeeCoverage(searchParameter);
}

module.exports = getEmployeesCoverage;
