const data = require('../data/zoo_data');

const { employees, species } = data;

const getEmployee = (people) => employees
  .find(({ id, firstName, lastName }) =>
    Object.values(people).includes(id) || Object.values(people).includes(firstName)
    || Object.values(people).includes(lastName));

const getAnimalName = (id) => id.map((element) => species
  .find((specie) => specie.id === element).name);

const getAnimalLocation = (id) => id.map((element) => species
  .find((specie) => specie.id === element).location);

const buildTheObject = (people) => {
  const object = {};
  const result = getEmployee(people);
  if (result) {
    const { id, firstName, lastName, responsibleFor } = result;
    Object.assign(object, {
      id,
      fullName: `${firstName} ${lastName}`,
      species: getAnimalName(responsibleFor),
      locations: getAnimalLocation(responsibleFor),
    });
    return object;
  }
  throw new Error('Informações inválidas');
};

const withoutParameters = () => {
  const array = [];
  employees.forEach((employee) => array.push(buildTheObject({ id: employee.id })));
  return array;
};

function getEmployeesCoverage(people) {
  // seu código aqui
  return (!people) ? withoutParameters() : buildTheObject(people);
}

module.exports = getEmployeesCoverage;
