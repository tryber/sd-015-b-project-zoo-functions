const data = require('../data/zoo_data');

function isManager(id) {
  const allManagers = [];
  data.employees.forEach((employee) => allManagers.push(employee.managers.toString()));
  const result = allManagers.toString().includes(id);
  return result;
}

function getRelatedEmployees(managerId) {
  const manager = isManager(managerId);
  if (!manager) throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  const juniors = [];
  data.employees.forEach((employee) => {
    if (employee.managers.includes(managerId)) {
      juniors.push(`${employee.firstName} ${employee.lastName}`);
    }
  });
  return juniors;
}

module.exports = { isManager, getRelatedEmployees };
