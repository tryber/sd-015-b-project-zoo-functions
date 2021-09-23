const { employees, species } = require('../data/zoo_data');

const getSpecies = (employee) => employee.responsibleFor.map((animalId) => species
  .find(({ id }) => id === animalId).name);

const getLocation = (employee) => employee.responsibleFor.map((animalId) => species
  .find(({ id }) => id === animalId).location);

function employeeData(identity) {
  const { id, name } = identity;
  return id ? employees.find((employee) => employee.id === id) : employees
    .find(({ firstName, lastName }) => firstName === name || lastName === name);
}

function employeeReturnInfo(identity) {
  const identifier = employeeData(identity);
  if (!identifier) throw new Error('Informações inválidas');
  const { id } = identifier;
  const fullName = `${identifier.firstName} ${identifier.lastName}`;
  const speciesName = getSpecies(identifier);
  const locations = getLocation(identifier);
  const returnEmployee = { id, fullName, species: speciesName, locations };
  return returnEmployee;
}

const allEmployees = () => {
  const employeesID = employees.map(({ id }) => id);
  const allEmployeesInfo = [];
  employeesID.forEach((employee) => allEmployeesInfo
    .push(employeeReturnInfo({ id: employee })));
  return allEmployeesInfo;
};

function getEmployeesCoverage(identity) {
  // seu código aqui
  return identity ? employeeReturnInfo(identity) : allEmployees();
}

// console.log(getEmployeesCoverage());
// console.log(getEmployeesCoverage({ name: 'Susan' }));
// console.log(getEmployeesCoverage({ name: 'Sharonda' }));
// console.log(getEmployeesCoverage({ name: 'Spry' }));
// console.log(getEmployeesCoverage({ id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad' }));

module.exports = getEmployeesCoverage;
