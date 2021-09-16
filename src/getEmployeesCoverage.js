const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpecies(array) {
  const arrayAnimals = [];
  for (let index = 0; index < array.length; index += 1) {
    const animalId = array[index];
    const animal = species.find((element) => element.id === animalId);
    arrayAnimals.push(animal.name);
  }
  return arrayAnimals;
}

function getLocations(array) {
  const locals = [];
  for (let index = 0; index < array.length; index += 1) {
    const animalId = array[index];
    const animal = species.find((element) => element.id === animalId);
    locals.push(animal.location);
  }
  return locals;
}

function getPerson(string) {
  const person = employees.find((element) => element.id === string
  || element.firstName === string || element.lastName === string);
  const object = {
    id: person.id,
    fullName: `${person.firstName} ${person.lastName}`,
    species: getSpecies(person.responsibleFor),
    locations: getLocations(person.responsibleFor),
  };
  return object;
}

function getAllEmployees(array) {
  const listEmployees = [];
  for (let index = 0; index < array.length; index += 1) {
    listEmployees.push(getPerson(array[index]));
  }
  return listEmployees;
}

function getEmployeesCoverage(param) {
  const employeesId = employees.map((element) => element.id);
  const employeesFirstName = employees.map((element) => element.firstName);
  const employeesLastName = employees.map((element) => element.lastName);
  if (!param) return getAllEmployees(employeesId);
  const search = Object.values(param)[0];
  if (employeesId.includes(search) || employeesFirstName.includes(search)
  || employeesLastName.includes(search)) return getPerson(search);
  throw new Error('Informações inválidas');
}

console.log(getEmployeesCoverage());
module.exports = getEmployeesCoverage;
