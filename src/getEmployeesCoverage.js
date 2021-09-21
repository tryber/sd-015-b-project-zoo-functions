const data = require('../data/zoo_data');
const { species, employees } = require('../data/zoo_data');

function findEmployeeByName(objValue) {
  if (Object.keys(objValue)[0] === 'name') {
    let employee = employees.find((element) => element.firstName === Object.values(objValue)[0]);
    if (typeof employee === 'undefined') {
      employee = employees.find((element) => element.lastName === Object.values(objValue)[0]);
      return employee;
    }
    return employee;
  }
}

function findEmployeeById(objValue) {
  if (Object.keys(objValue)[0] === 'id') {
    const employee = employees.find((element) => element.id === Object.values(objValue)[0]);
    return employee;
  }
}

function objectOutput(employeeObj, arrayAnimalsName, arrayAnimalsLocation) {
  const objeto = {
    id: employeeObj.id,
    fullName: `${employeeObj.firstName} ${employeeObj.lastName}`,
    species: arrayAnimalsName,
    locations: arrayAnimalsLocation,
  };
  return objeto;
}

function getSpecies(objecEmployee) {
  const findSpecies = species.map((element) => element);
  const responsible = objecEmployee.responsibleFor;
  const arraySpecie = responsible.map((element) => {
    const findResponsible = findSpecies.find((animalId) => animalId.id === element);
    return findResponsible;
  });
  return arraySpecie;
}

function verifyCount(number) {
  if (number === 0) {
    throw new Error('Informações inválidas');
  }
}

function verifyNameAndId(IdPm) {
  let count = 0;
  employees.forEach((id) => {
    if (id.firstName === Object.values(IdPm)[0] || id.lastName === Object.values(IdPm)[0]) {
      count += 1;
    }
  });
  employees.forEach((id) => {
    if (id.id === Object.values(IdPm)[0]) {
      count += 1;
    }
  });
  verifyCount(count);
}

function verifyParameter(parameter) {
  if (typeof parameter === 'undefined') {
    const employee = employees.map((element) => {
      const findSpecie = getSpecies(element);
      const specieNames = findSpecie.map((animalName) => animalName.name);
      const specieLocations = findSpecie.map((animalLocation) => animalLocation.location);
      const result = objectOutput(element, specieNames, specieLocations);
      return result;
    });
    return employee;
  }
}

function getEmployeesCoverage(Identification) {
  if (typeof Identification === 'undefined') {
    const allEmployees = verifyParameter(); return allEmployees;
  }
  verifyNameAndId(Identification);
  const employeeName = findEmployeeByName(Identification);
  if (typeof employeeName !== 'undefined') {
    const findSpecie = getSpecies(employeeName);
    const specieNames = findSpecie.map((animalName) => animalName.name);
    const specieLocations = findSpecie.map((animalLocation) => animalLocation.location);
    const result = objectOutput(employeeName, specieNames, specieLocations);
    return result;
  }
  const employeeId = findEmployeeById(Identification);
  const findSpecie = getSpecies(employeeId);
  const specieNames = findSpecie.map((animalName) => animalName.name);
  const specieLocations = findSpecie.map((animalLocation) => animalLocation.location);
  const result = objectOutput(employeeId, specieNames, specieLocations);
  return result;
}

module.exports = getEmployeesCoverage;
