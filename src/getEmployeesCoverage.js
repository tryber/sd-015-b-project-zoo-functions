const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// busca o objeto do funcionario desejado;
function getEmployee(obj) {
  return employees.find((employee) => Object.values(employee).includes(obj.id)
    || Object.values(employee).includes(obj.name));
}

// busca a localização de uma especie de animal
function getLocation(id) {
  return species.find((animal) => animal.id === id).location;
}

// retorna o nome do animal
function getAnimalName(id) {
  return species.find((animal) => animal.id === id).name;
}

// cria o objeto com as informaçoes do funcionario
function createEmployeeData(obj) {
  const employeeObj = getEmployee(obj);
  return {
    id: employeeObj.id,
    fullName: `${employeeObj.firstName} ${employeeObj.lastName}`,
    species: employeeObj.responsibleFor.map((animal) => getAnimalName(animal)),
    locations: employeeObj.responsibleFor.map((animal) => getLocation(animal)),
  };
}

function arrayAllEmployees() {
  return employees.map((employee) => employee.id)
    .map((employeeId) => createEmployeeData({ id: employeeId }));
}

function isEmployee(obj) {
  // seu código aqui
  return employees.some((employee) => Object.values(employee).includes(obj.id)
  || Object.values(employee).includes(obj.name));
}

function getEmployeesCoverage(obj) {
  // seu código aqui
  if (obj === undefined) {
    return arrayAllEmployees();
  }

  if (isEmployee(obj)) {
    return createEmployeeData(obj);
  }

  throw new Error('Informações inválidas');
}

module.exports = getEmployeesCoverage;
