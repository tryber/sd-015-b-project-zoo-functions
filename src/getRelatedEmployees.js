const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  return employees.some((employee) => employee.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  const verify = isManager(managerId);
  if (verify) {
    const responsible = employees.filter((em) => em.managers.find((ma) => ma === managerId));
    return responsible.map((resp) => `${resp.firstName} ${resp.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
