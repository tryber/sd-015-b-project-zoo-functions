const data = require('../data/zoo_data');

const getEmployeeInfo = (id, name) =>
  data.employees.filter((employee) =>
    employee.id === id
    || employee.firstName === name
    || employee.lastName === name)[0];

const getNameSpeciesOfEmployee = (employee) => {
  const result = [];
  employee.responsibleFor.forEach((responsible) =>
    result.push(data.species.filter((specie) =>
      specie.id === responsible).map((specie) =>
      specie.name)[0]));
  return result;
};

const getLocationsSpeciesOfEmployee = (employee) => {
  const result = [];
  employee.responsibleFor.forEach((responsible) =>
    result.push(data.species.filter((specie) =>
      specie.id === responsible).map((specie) =>
      specie.location)[0]));
  return result;
};

const getEmployeeOutput = (info) => {
  const employee = getEmployeeInfo(info.id, info.name);
  if (!employee || employee === '') {
    throw new Error('Informações inválidas');
  }
  const speciesNames = getNameSpeciesOfEmployee(employee);
  const speciesLocations = getLocationsSpeciesOfEmployee(employee);
  return {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: speciesNames,
    locations: speciesLocations,
  };
};

const getAllEmployeesOutput = () => {
  const result = [];
  const employees = data.employees.filter((employee) =>
    employee).map((employee) => employee.id);
  employees.forEach((employee) =>
    result.push(getEmployeeOutput({ id: employee })));
  return result;
};

const getEmployeesCoverage = (nameOrId) => {
  let result;
  if (!nameOrId) {
    result = getAllEmployeesOutput();
  } else {
    result = getEmployeeOutput(nameOrId);
  }
  return result;
};

module.exports = getEmployeesCoverage;
