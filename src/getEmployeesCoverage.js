const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const employeesInformation = employees.map(({ firstName, lastName, responsibleFor, id }) => {
  const inner = { id };
  inner.id = id;
  inner.fullName = `${firstName} ${lastName}`;
  inner.species = responsibleFor.map((element) => species
    .find((specie) => specie.id === element).name);
  inner.locations = responsibleFor.map((element) => species
    .find((specie) => specie.id === element).location);
  return inner;
});

const getEmployee = ({ name, id }) => {
  if (name) {
    const back = employeesInformation.filter((element) => element.fullName.includes(name));
    return back[0];
  }
  if (id) {
    const back = employeesInformation.filter((element) => element.id === id);
    if (back.length !== 0) {
      return back[0];
    }
    throw new Error('Informações inválidas');
  }
};

function getEmployeesCoverage(...argument) {
  if (arguments.length === 0) {
    return employeesInformation;
  }
  return getEmployee(argument[0]);
}

module.exports = getEmployeesCoverage;
