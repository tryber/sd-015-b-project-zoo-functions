const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return employees.some((worker) =>
    worker.managers.find((manager) => manager === id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    return employees
      .filter((worker) => worker.managers.includes(managerId))
      .map((workers) => `${workers.firstName} ${workers.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
