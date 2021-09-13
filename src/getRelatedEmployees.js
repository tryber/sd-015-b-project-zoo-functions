const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  const confere = employees.some((employee) => employee.managers.includes(id));

  return confere;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    const percorre = employees.filter((employee) => employee.managers.includes(managerId))
      .map((atualEmployee) => `${atualEmployee.firstName} ${atualEmployee.lastName}`);
    return percorre;
  } throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
