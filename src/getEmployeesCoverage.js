const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getEmployee = (obj) => {
  const { values } = Object;
  const employee = ({ id, firstName, lastName }) =>
    values(obj).includes(id)
    || values(obj).includes(firstName)
    || values(obj).includes(lastName);

  return employees.some(employee)
    ? employees.find(employee)
    : false;
};

const getSpeciesName = (obj) => getEmployee(obj).responsibleFor
  .map((specie) => species
    .find(({ id }) => id === specie).name);

const getSpeciesLocation = (obj) => getEmployee(obj).responsibleFor
  .map((specie) => species
    .find(({ id }) => id === specie).location);

const objectConstructing = (obj) => {
  const object = {};
  if (!getEmployee(obj)) throw new Error('Informações inválidas');
  const { id, firstName, lastName } = getEmployee(obj);
  Object.assign(object, {
    id,
    fullName: `${firstName} ${lastName}`,
    species: getSpeciesName(obj),
    locations: getSpeciesLocation(obj),
  });
  return object;
};

const objectConstructingAll = () => {
  const employeesAll = [];
  employees.forEach((employee) => {
    employeesAll.push(objectConstructing({ id: employee.id }));
  });
  return employeesAll;
};

function getEmployeesCoverage(obj) {
  return !obj
    ? objectConstructingAll()
    : objectConstructing(obj);
}

module.exports = getEmployeesCoverage;
