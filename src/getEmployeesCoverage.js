const data = require('../data/zoo_data');

const { employees } = data;

const { species } = data;

function getAllPreviousInfo() {
  const employeesData = employees.map((employee) => employee);

  return employeesData.map((employee) => {
    const specieNames = species.filter((specie) =>
      employee.responsibleFor.includes(specie.id)).map((specie) => specie.name);

    const specieLocation = species.filter((specie) =>
      employee.responsibleFor.includes(specie.id)).map((specie) => specie.location);

    return { employee, specieNames, specieLocation };
  });
}

function getAllEmployeesInfo() {
  const infos = getAllPreviousInfo();

  return infos.map((employee) => {
    const objResult = { id: '', fullName: '', species: [], locations: [] };

    objResult.id = employee.employee.id;
    objResult.fullName = `${employee.employee.firstName} ${employee.employee.lastName}`;
    objResult.species = employee.specieNames;
    objResult.locations = employee.specieLocation;

    return objResult;
  });
}

function getPreviousInfo(employeeInfo) {
  const employeeData = employees.find((employee) =>
    Object.values(employee).includes(employeeInfo.name || employeeInfo.id));

  if (employeeData === undefined) {
    throw new Error('Informações inválidas');
  }

  const specieNames = species.filter((specie) =>
    employeeData.responsibleFor.includes(specie.id)).map((specie) => specie.name);

  const specieLocation = species.filter((specie) =>
    employeeData.responsibleFor.includes(specie.id)).map((specie) => specie.location);

  return { employeeData, specieNames, specieLocation };
}

function getEmployeesInfo(employeeInfo) {
  const infos = getPreviousInfo(employeeInfo);
  const result = { id: '', fullName: '', species: [], locations: [] };

  result.id = infos.employeeData.id;
  result.fullName = `${infos.employeeData.firstName} ${infos.employeeData.lastName}`;
  result.species = infos.specieNames;
  result.locations = infos.specieLocation;

  return result;
}

function getEmployeesCoverage(employeeInfo) {
  if (employeeInfo) return getEmployeesInfo(employeeInfo);
  return getAllEmployeesInfo();
}

module.exports = getEmployeesCoverage;
