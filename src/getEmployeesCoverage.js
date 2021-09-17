const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getSpeciesById = (employee) => employee.responsibleFor
  .map((id) => species.find((specie) => specie.id === id).name);

const getLocations = (employee) => employee.responsibleFor
  .map((id) => species.find((specie) => specie.id === id).location);

const allEmployeesCoverage = () => {
  const employeess = [];
  employees.forEach((interado) => {
    const employeeCoverage = {
      id: interado.id,
      fullName: `${interado.firstName} ${interado.lastName}`,
      species: getSpeciesById(interado),
      locations: getLocations(interado),
    };
    employeess.push(employeeCoverage);
  });
  return employeess;
};

const objectEmployee = (interado) => ({
  id: interado.id,
  fullName: `${interado.firstName} ${interado.lastName}`,
  species: getSpeciesById(interado),
  locations: getLocations(interado),
});

const getEmployeeCoverage = (options) => {
  const { name, id } = options;

  const searchByFirstName = employees.find((interado) => interado.firstName === name);
  const searchByLastName = employees.find((interado) => interado.lastName === name);
  const searchById = employees.find((interado) => interado.id === id);

  if (searchByFirstName) return objectEmployee(searchByFirstName);
  if (searchByLastName) return objectEmployee(searchByLastName);
  if (searchById) return objectEmployee(searchById);

  throw new Error('Informações inválidas');
};

function getEmployeesCoverage(options) {
  if (!options) return allEmployeesCoverage();
  return getEmployeeCoverage(options);
}

module.exports = getEmployeesCoverage;
