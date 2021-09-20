const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  let result = false;
  employees.forEach((employee) => {
    if (employee.managers.includes(id)) {
      result = true;
    }
  });

  return result;
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  const relateds = employees.filter((employee) => employee.managers.includes(managerId));
  const relatedNames = relateds.map((related) => `${related.firstName} ${related.lastName}`);

  return relatedNames;
}

module.exports = { isManager, getRelatedEmployees };
