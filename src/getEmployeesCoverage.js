const { employees, species } = require('../data/zoo_data');

const getAnimalData = (responsibleFor) => {
  const animalData = responsibleFor.reduce((acc, animalId) => {
    const findAnimal = species.find((animal) => animal.id === animalId);
    const { location, name } = findAnimal;
    acc.locations.push(location);
    acc.species.push(name);
    return acc;
  }, { locations: [], species: [] });

  return animalData;
};
const getAllEmployees = () => {
  const allEmployees = employees.map((employee) => {
    const { id, firstName, lastName, responsibleFor } = employee;
    const animalData = getAnimalData(responsibleFor);

    return ({
      id,
      fullName: `${firstName} ${lastName}`,
      ...animalData,
    });
  });

  return allEmployees;
};

const isEmployeeIdValid = (id) => employees.some((employee) => employee.id === id);
const isEmployeeFirstNameValid = (name) => employees.some(({ firstName }) => firstName === name);
const isEmployeeLastNameValid = (name) => employees.some(({ lastName }) => lastName === name);
const isEmployeeNameValid = (name) => {
  const findFirstName = isEmployeeFirstNameValid(name);
  const findLastName = isEmployeeLastNameValid(name);

  return (findFirstName || findLastName);
};
const isValidEmployee = (nameOrId) => {
  const { name, id } = nameOrId;
  const validId = isEmployeeIdValid(id);
  const validName = isEmployeeNameValid(name);

  return (validId || validName);
};

const getEmployeeById = (id, allEmployees) => allEmployees.find((employee) => employee.id === id);

const getEmployeeByName = (name, allEmployees) => {
  const findName = allEmployees.find(({ fullName }) => fullName.includes(name));
  return findName;
};

const getNameOrIdFiltred = (nameOrId, allEmployees) => {
  const { name, id } = nameOrId;
  const validId = isEmployeeIdValid(id);
  const validFirstName = isEmployeeFirstNameValid(name);
  const validLastName = isEmployeeLastNameValid(name);

  if (validId) return getEmployeeById(id, allEmployees);
  if (validFirstName || validLastName) return getEmployeeByName(name, allEmployees);
};

function getEmployeesCoverage(nameOrId) {
  // seu código aqui
  const allEmployees = getAllEmployees();
  if (!nameOrId) return allEmployees;

  const isEmployee = isValidEmployee(nameOrId);
  if (!isEmployee) {
    throw new Error('Informações inválidas');
  }

  return getNameOrIdFiltred(nameOrId, allEmployees);
}

module.exports = getEmployeesCoverage;
