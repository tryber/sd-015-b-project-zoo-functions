const data = require('../data/zoo_data');
const { employees, species } = require('../data/zoo_data');

const employee = () => employees.map(({ id, firstName, lastName, responsibleFor }) => {
  const employeeInfo = {
    id,
    fullName: `${firstName} ${lastName}`,
    species: [],
    locations: [],
  };
  for (let i = 0; i < responsibleFor.length; i += 1) {
    employeeInfo.species.push(species.find((kind) => kind.id === responsibleFor[i]).name);
    employeeInfo.locations.push(species.find((kind) => kind.id === responsibleFor[i]).location);
  }
  return employeeInfo;
});

function getEmployeesCoverage(person) {
  // seu código aqui
  if (!person) return employee();

  if (!employee().some((idv) => (idv.id === person.id || idv.fullName.includes(person.name)))) {
    throw new Error('Informações inválidas');
  }

  return employee().find((idv) => (idv.id === person.id || idv.fullName.includes(person.name)));
}

module.exports = getEmployeesCoverage;

// referencia: https://github.com/tryber/sd-015-b-project-zoo-functions/blob/fernanda-michetti-zoo-functions/src/getEmployeesCoverage.js
