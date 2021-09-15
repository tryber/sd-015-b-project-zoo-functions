const data = require('../data/zoo_data');

const getSpeciesById = (employee) => employee.responsibleFor
  .map((id) => data.species.find((specie) => specie.id === id).name);

const getLocations = (employee) => employee.responsibleFor
  .map((id) => data.species.find((specie) => specie.id === id).location);

const allEmployeesCoverage = () => {
  const allEmployees = [];
  data.employees.forEach((emp) => {
    const employeeCoverage = {
      id: emp.id,
      fullName: `${emp.firstName} ${emp.lastName}`,
      species: getSpeciesById(emp),
      locations: getLocations(emp),
    };
    allEmployees.push(employeeCoverage);
  });
  return allEmployees;
};

const objectEmployee = (emp) => ({
  id: emp.id,
  fullName: `${emp.firstName} ${emp.lastName}`,
  species: getSpeciesById(emp),
  locations: getLocations(emp),
});

const getEmployeeCoverage = (options) => {
  const { name, id } = options;

  const searchByFirstName = data.employees.find((emp) => emp.firstName === name);
  const searchByLastName = data.employees.find((emp) => emp.lastName === name);
  const searchById = data.employees.find((emp) => emp.id === id);

  if (searchByFirstName) { return objectEmployee(searchByFirstName); }
  if (searchByLastName) { return objectEmployee(searchByLastName); }
  if (searchById) { return objectEmployee(searchById); }

  throw new Error('Informações inválidas');
};

function getEmployeesCoverage(options) {
  if (!options) { return allEmployeesCoverage(); }
  return getEmployeeCoverage(options);
}

module.exports = getEmployeesCoverage;
