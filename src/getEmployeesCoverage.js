const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function findEmployee(employee) {
  return employees.find((employeee) => {
    const firstCondition = employeee.id === employee.id;
    const secondCondition = employeee.firstName === employee.name;
    const thirdCondition = employeee.lastName === employee.name;
    return (firstCondition || secondCondition || thirdCondition);
  });
}

function createSpeciesAndLocations(currentEmployee) {
  const { responsibleFor } = currentEmployee;
  const species = [];
  const locations = [];
  responsibleFor.forEach((eachResponse) => {
    species.push(data.species.find((specie) => specie.id === eachResponse).name);
    locations.push(data.species.find((specie) => specie.id === eachResponse).location);
  });
  return [species, locations];
}

function coverageFromAll() {
  const allEmployees = [];
  employees.forEach((current) => {
    const { id, firstName, lastName } = current;
    const speciesAndLocations = createSpeciesAndLocations(current);
    const [species, locations] = speciesAndLocations;
    const coverage = {
      id,
      fullName: `${firstName} ${lastName}`,
      species,
      locations,
    };
    allEmployees.push(coverage);
  });
  return allEmployees;
}

function getEmployeesCoverage(employee = 0) {
  const currentEmployee = findEmployee(employee);
  if (employee === 0) {
    return coverageFromAll();
  } if (currentEmployee === undefined) {
    throw new Error('Informações inválidas');
  } const { id, firstName, lastName } = currentEmployee;
  const speciesAndLocations = createSpeciesAndLocations(currentEmployee);
  const [species, locations] = speciesAndLocations;
  const coverage = {
    id,
    fullName: `${firstName} ${lastName}`,
    species,
    locations,
  };
  return coverage;
}

module.exports = getEmployeesCoverage;
