// feito com consulta ao repositório e MUITA ajuda do colega Leandro Oliveira

const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function selectedEmployee(object) {
  const firstName = employees.find((employee) => (object.name === employee.firstName));
  if (firstName) {
    return firstName;
  }

  const lastName = employees.find((employee) => (object.name === employee.lastName));
  if (lastName) {
    return lastName;
  }

  const id = employees.find((employee) => (object.id === employee.id));
  if (id) {
    return id;
  }
}

function getEmployee(object) {
  const employee = selectedEmployee(object);
  if (!employee) {
    throw new Error('Informações inválidas');
  }
  const animals = data.species.filter((specie) => employee.responsibleFor.includes(specie.id));
  const species = [];
  const locations = [];
  animals.forEach((animal) => {
    species.push(animal.name);
    locations.push(animal.location);
  });
  return ({
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species,
    locations,
  });
}

function coverages() {
  const allEmployee = [];
  employees.forEach((employee) => {
    allEmployee.push(getEmployee({ name: employee.firstName }));
  });
  return allEmployee;
}

function getEmployeesCoverage(object) {
  if (!object) {
    return coverages();
  }
  return getEmployee(object);
}

module.exports = getEmployeesCoverage;
