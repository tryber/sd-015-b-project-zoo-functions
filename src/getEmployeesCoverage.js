const data = require('../data/zoo_data');

function getSpecieName(specieEntrance) {
  return specieEntrance.reduce((acc, specie) => acc.concat(data.species.find((element) =>
    element.id === specie).name), []);
}

function getSpecieLocation(specieEntrance) {
  return specieEntrance.reduce((acc, specie) => acc.concat(data.species.find((element) =>
    element.id === specie).location), []);
}

function getEmployeeData(employeeEntrance) {
  const employeeData = data.employees.find((employee) =>
    employee.firstName === employeeEntrance
    || employee.lastName === employeeEntrance || employee.id === employeeEntrance);
  return {
    id: employeeData.id,
    fullName: `${employeeData.firstName} ${employeeData.lastName}`,
    species: getSpecieName(employeeData.responsibleFor),
    locations: getSpecieLocation(employeeData.responsibleFor),
  };
}

function getAllEmployeeData() {
  const allEmployee = data.employees.map((element) => element.id);
  return allEmployee.reduce((acc, employee) => acc.concat(getEmployeeData(employee)), []);
}

function getEmployeesCoverage(employeeInfo) {
  if (employeeInfo === undefined) {
    return getAllEmployeeData();
  }
  if (data.employees.some((employee) => employee.firstName === employeeInfo.name
   || employee.id === employeeInfo.id || employee.lastName === employeeInfo.name)) {
    if (Object.keys(employeeInfo).includes('name')) {
      return getEmployeeData(employeeInfo.name);
    }
    return getEmployeeData(employeeInfo.id);
  }
  throw new Error('Informações inválidas');
}

module.exports = getEmployeesCoverage;
