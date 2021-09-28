const data = require('../data/zoo_data');

const { employees } = data;
const { species } = data;

function getFullEmployeeCoverage() {
  return employees.map((employee) =>
    ({
      id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      species: employee.responsibleFor.map((responsibleAnimal) => species
        .find((animal) => animal.id === responsibleAnimal).name),
      locations: employee.responsibleFor.map((responsibleAnimal) => species
        .find((animal) => animal.id === responsibleAnimal).location),
    }));
}

const fullCoverage = getFullEmployeeCoverage();

const searchByName = (name) => fullCoverage.find((coverage) => coverage.fullName
  .split(' ').some((names) => names === name));

const searchByID = (id) => fullCoverage.find((coverage) => coverage.id === id);

function getEmployeesCoverage({ name, id } = { name: false, id: false }) {
  let result = fullCoverage;
  if (name) result = searchByName(name);
  if (id) result = searchByID(id);
  if (!result) throw new Error('Informações inválidas');
  return result;
}

module.exports = getEmployeesCoverage;

// {
//   id: 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
//   fullName: 'Nigel Nelson',
//   species: [ 'lions', 'tigers' ],
//   locations: [ 'NE', 'NW' ],
// }
