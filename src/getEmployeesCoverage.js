const data = require('../data/zoo_data');

function ifName(name) {
  let counterComparition = 0;
  data.employees.forEach((element) => {
    if (element.firstName === name || element.lastName === name) {
      counterComparition += 1;
    }
  });
  if (counterComparition === 0) { throw new Error('Informações inválidas'); }
  const employee = data.employees
    .find((element) => element.firstName === name || element.lastName === name);
  const animalIds = employee.responsibleFor;
  const animalObjects = data.species.filter((animal) => animalIds.includes(animal.id));
  const animalNames = animalObjects.map((animal) => animal.name);
  const animalLocations = animalObjects.map((animal) => animal.location);
  return { id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: animalNames,
    locations: animalLocations,
  };
}

function ifId(id) {
  let counterComparition = 0;
  data.employees.forEach((element) => {
    if (element.id === id) {
      counterComparition += 1;
    }
  });
  if (counterComparition === 0) { throw new Error('Informações inválidas'); }
  const employee = data.employees
    .find((element) => element.id === id);
  const animalIds = employee.responsibleFor;
  const animalObjects = data.species.filter((animal) => animalIds.includes(animal.id));
  const animalNames = animalObjects.map((animal) => animal.name);
  const animalLocations = animalObjects.map((animal) => animal.location);
  return { id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: animalNames,
    locations: animalLocations,
  };
}

function ifNoArgs() {
  const employee = data.employees;
  const returnArray = [];
  employee.forEach((element) => {
    const animalIds = element.responsibleFor;
    const animalObjects = data.species.filter((animal) => animalIds.includes(animal.id));
    const animalNames = animalObjects.map((animal) => animal.name);
    const animalLocations = animalObjects.map((animal) => animal.location);
    returnArray.push({ id: element.id,
      fullName: `${element.firstName} ${element.lastName}`,
      species: animalNames,
      locations: animalLocations,
    });
  });
  return returnArray;
}

function getEmployeesCoverage(param) {
  if (!param) {
    return ifNoArgs();
  }
  const { name, id } = param;
  if (name) {
    return ifName(name);
  }
  if (id) {
    return ifId(id);
  }
}

module.exports = getEmployeesCoverage;
