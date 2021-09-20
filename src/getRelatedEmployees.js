const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  return data.employees.some((employee) => employee.managers.some((managerId) => managerId === id));
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  const employerName = (arr) => {
    const fullName = `${arr.firstName} ${arr.lastName}`;
    return fullName;
  };
  const verifyManager = (employee) => employee.managers.some((manager) => manager === managerId);
  if (isManager(managerId) === true) {
    const employerManager = data.employees.filter((verifyManager));
    return employerManager.map((employerName));
  }
  if (isManager(managerId) === false) {
    const throwErr = (msg) => {
      throw new Error(msg);
    };
    return throwErr('O id inserido não é de uma pessoa colaboradora gerente!');
  }
}

module.exports = { isManager, getRelatedEmployees };
