const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const shearchPerson = (identifier) => employees.find((person) => person.id === identifier
  || person.firstName === identifier
  || person.lastName === identifier);

const findResponsibleAnimals = (person) => {
  const responsibles = person.responsibleFor;
  const animals = species.filter((specie) => responsibles.find((id) => id === specie.id));
  return animals;
};
const generateLocations = (person) => {
  const responsibleAnimals = findResponsibleAnimals(person);
  const locations = responsibleAnimals.map((animal) => animal.location);
  return locations;
};
const findResponsibleSpecies = (person) => {
  const responsibleAnimals = findResponsibleAnimals(person);
  const animalsNames = responsibleAnimals.map((specie) => specie.name);
  return animalsNames;
};
const creatPersonCovarageObj = (person) => {
  const personObj = {
    id: person.id,
    fullName: `${person.firstName} ${person.lastName}`,
    species: findResponsibleSpecies(person),
    locations: generateLocations(person),
  };
  return personObj;
};
const generateAllEmployeesObjs = () => {
  const allEmployess = employees.map((employee) => creatPersonCovarageObj(employee));
  return allEmployess;
};

function getEmployeesCoverage(identifierObj) {
  // seu código aqui
  let employeeObj = {};
  if (identifierObj) {
    const identifier = Object.values(identifierObj)[0];
    const personFound = shearchPerson(identifier);

    if (personFound) {
      employeeObj = (creatPersonCovarageObj(personFound));
    } else {
      throw new Error('Informações inválidas');
    }
  } else {
    employeeObj = generateAllEmployeesObjs();
  }
  return employeeObj;
}
console.log(getEmployeesCoverage());
module.exports = getEmployeesCoverage;
