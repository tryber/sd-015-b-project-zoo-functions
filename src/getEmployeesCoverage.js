const data = require('../data/zoo_data');

const firstNames = data.employees.map((element) => element.firstName);
const lastNames = data.employees.map((element) => element.lastName);
const fullNames = firstNames.map((element, index) => `${element} ${lastNames[index]}`);
const ids = data.employees.map((element) => element.id);

const findEmployee = (nameToFind) =>
  data.employees.find((element) =>
    element.firstName === nameToFind || element.lastName === nameToFind);

const findSpecie = (idSpecieToFind) =>
  data.species.find((element) => element.id === idSpecieToFind).name;

const findSpecieLocation = (idSpecieToFind) =>
  data.species.find((element) => element.id === idSpecieToFind).location;

const getSpecies = (nameEmployee) => {
  const speciesIDS = findEmployee(nameEmployee).responsibleFor;
  return speciesIDS.map((element) => findSpecie(element));
};

const getSpeciesLocations = (nameEmployee) => {
  const speciesIDS = findEmployee(nameEmployee).responsibleFor;
  return speciesIDS.map((element) => findSpecieLocation(element));
};

const employeesCoverage = ids.map((element, index) => {
  const result = {
    id: element,
    fullName: fullNames[index],
    species: getSpecies(firstNames[index]),
    locations: getSpeciesLocations(firstNames[index]),
  };
  return result;
});

const testeString = (string, teste) => string.includes(teste);

const findEmployeeByName = (employeeName) => {
  const employee = employeesCoverage.find((element) => testeString(element.fullName, employeeName));
  if (employee) {
    return employee;
  }
  throw new Error('Informações inválidas');
};
const findEmployeeByID = (employeeID) => {
  const employee = employeesCoverage.find((element) => testeString(element.id, employeeID));
  if (employee) {
    return employee;
  }
  throw new Error('Informações inválidas');
};

const getOneEmployee = (key, value) => {
  if (key === 'name') {
    return findEmployeeByName(value);
  }
  return findEmployeeByID(value);
};

function getEmployeesCoverage(object) {
  // seu código aqui
  if (!object) {
    return employeesCoverage;
  }
  return getOneEmployee(Object.keys(object)[0], Object.values(object)[0]);
}

module.exports = getEmployeesCoverage;
