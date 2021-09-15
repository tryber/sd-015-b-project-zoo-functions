const data = require('../data/zoo_data');

const { employees, species } = data;

const verify = (ids) => {
  const { id, name } = ids;
  let names;
  if (id) {
    names = employees.find((ele) => ele.id === id);
  } else {
    names = employees.find(({ firstName, lastName }) => firstName === name || lastName === name);
  }
  return names;
};

const getEmployee = (type) => {
  const check = verify(type);

  if (!check) throw new Error('Informações inválidas');

  const { firstName, lastName, responsibleFor, id } = check;
  const speciesName = responsibleFor.map((animal) => species
    .find((specie) => specie.id === animal).name);
  const fullName = `${firstName} ${lastName}`;
  const locations = responsibleFor.map((animal) => species
    .find((specie) => specie.id === animal).location);
  const employee = {
    id,
    fullName,
    species: speciesName,
    locations,
  };
  return employee;
};

const allEmployees = () => {
  const array = [];

  employees.forEach((element) => {
    array.push(getEmployee({ id: element.id }));
  });
  return array;
};

function getEmployeesCoverage(ids) {
  return (ids) ? getEmployee(ids) : allEmployees();
}

module.exports = getEmployeesCoverage;
