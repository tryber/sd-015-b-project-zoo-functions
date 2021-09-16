const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// **Dica**: Crie funções que dividam a tarefa em partes menores, por exemplo, você poderia criar uma função `getSpecies` encarregada somente por buscar o nome das espécies que a pessoa é responsável.

// Tive ajuda neste requisito da sala de estudo n5 e monitorias.

function getEmployee(object) {
  const { values } = Object;
  return employees.find(({ id, firstName, lastName }) => values(object).includes(id)
  || values(object).includes(firstName) || values(object).includes(lastName));
}

function getSpecies(responsibleForId) {
  return species.filter(({ id }) => responsibleForId.includes(id))
    .map(({ name }) => name);
}

function getLocation(responsibleForId) {
  return species.filter(({ id }) => responsibleForId.includes(id))
    .map(({ location }) => location);
}

function getObject(object) {
  if (getEmployee(object) === undefined) {
    throw new Error('Informações inválidas');
  }
  const { id, firstName, lastName, responsibleFor } = getEmployee(object);
  const objectInfo = {
    id,
    fullName: `${firstName} ${lastName}`,
    species: getSpecies(responsibleFor),
    locations: getLocation(responsibleFor),
  };
  return objectInfo;
}

function getAllEmployees() {
  const arrayOfEmployees = [];
  employees.forEach((employee) => arrayOfEmployees.push(getObject({ id: employee.id })));
  return arrayOfEmployees;
}

function getEmployeesCoverage(object) {
  return !object ? getAllEmployees() : getObject(object);
}

module.exports = getEmployeesCoverage;
