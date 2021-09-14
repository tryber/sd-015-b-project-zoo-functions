const data = require('../data/zoo_data');

function isManager(id) {
  const managers = [];
  data.employees.forEach((emp) => {
    emp.managers.forEach((manager) => {
      if (!managers.includes(manager)) {
        managers.push(manager);
      }
    });
  });
  return managers.includes(id);
}

function getRelatedEmployees(managerId) {
  const managed = [];
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  data.employees.forEach((emp) => {
    if (emp.managers.includes(managerId)) {
      managed.push(`${emp.firstName} ${emp.lastName}`);
    }
  });
  return managed;
}

module.exports = { isManager, getRelatedEmployees };
