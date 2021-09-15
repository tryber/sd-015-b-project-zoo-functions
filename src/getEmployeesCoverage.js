const data = require('../data/zoo_data');

function getAllEmployeesId() {
  const employeesIds = [];
  data.employees.forEach((worker) => {
    const id = `${worker.id}`;
    employeesIds.push(id);
  });
  return employeesIds;
}

function getAllEmployessFullNames() {
  const employeesFullNames = [];
  data.employees.forEach((worker) => {
    const fullName = `${worker.firstName} ${worker.lastName}`;
    employeesFullNames.push(fullName);
  });
  return employeesFullNames;
}

function getAllEmployeesSpecies() {
  const employeesSpecies = [];
  data.employees.forEach((worker) => {
    const workerAnimals = [];
    const animals = worker.responsibleFor;
    const animalsKind = data.species.filter((animal) => animals.includes(animal.id));
    animalsKind.forEach((animal) => {
      workerAnimals.push(animal.name);
    });
    employeesSpecies.push(workerAnimals);
  });
  return employeesSpecies;
}

function getAllEmployeesCoordinates() {
  const employeesCoordinates = [];
  data.employees.forEach((worker) => {
    const workerCoordinates = [];
    const animals = worker.responsibleFor;
    const animalsKind = data.species.filter((animal) => animals.includes(animal.id));
    animalsKind.forEach((animal) => {
      workerCoordinates.push(animal.location);
    });
    employeesCoordinates.push(workerCoordinates);
  });
  return employeesCoordinates;
}

function handleUndefinedParameter() {
  const ids = getAllEmployeesId();
  const fullNames = getAllEmployessFullNames();
  const species = getAllEmployeesSpecies();
  const locations = getAllEmployeesCoordinates();
  const coverage = [];

  ids.forEach((element, index) => {
    const obj = { id: '', fullName: '', species: '', locations: '' };
    obj.id = element;
    obj.fullName = fullNames[index];
    obj.species = species[index];
    obj.locations = locations[index];

    coverage.push(obj);
  });

  return coverage;
}

function handleNameOrIdParameter(parameter) {
  if (Object.keys(parameter)[0] === 'name') {
    const inputValue = Object.values(parameter)[0];
    const employee = data.employees.find((worker) => worker.firstName === inputValue
    || worker.lastName === inputValue);
    return employee;
  }
  const inputValue = Object.values(parameter)[0];
  const employee = data.employees.find((worker) => worker.id === inputValue);
  return employee;
}

function handleError(parameter) {
  const status = handleNameOrIdParameter(parameter);
  if (status === undefined) {
    throw new Error('Informações inválidas');
  }
  return status;
}

function handleDefinedParameter(parameter) {
  const coverage = { id: '', fullName: '', species: '', locations: '' };
  const workerAnimals = [];
  const workerCoordinates = [];
  const employee = handleError(parameter);

  employee.responsibleFor.forEach((animal) => {
    const workerAnimal = data.species.find((beast) => beast.id === animal);
    workerAnimals.push(workerAnimal.name);
    workerCoordinates.push(workerAnimal.location);
  });
  coverage.id = employee.id;
  coverage.fullName = `${employee.firstName} ${employee.lastName}`;
  coverage.species = workerAnimals;
  coverage.locations = workerCoordinates;
  return coverage;
}

function getEmployeesCoverage(parameter) {
  if (parameter === undefined) {
    return handleUndefinedParameter();
  }
  return handleDefinedParameter(parameter);
}

module.exports = getEmployeesCoverage;
