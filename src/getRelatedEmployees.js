const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((employee) => employee.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const obj = data.employees.filter((employee) => {
      const employees = employee.managers.find((manager) => manager === managerId);
      return employees;
    });
    const string = obj.map((obj) => `${obj.firstName} ${obj.lastName}`);
    return string;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
