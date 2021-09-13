const data = require('../data/zoo_data');

function isManager(id) {
  const { employees: people } = data;

  const confere = people.some((employee) => employee.managers.includes(id));

  return confere;
}

function getRelatedEmployees(managerId) {
  const { employees: people } = data;
  if (isManager(managerId) === true) {
    const percorre = people.filter((employee) => employee.managers.includes(managerId))
      .map((atualEmployee) => `${atualEmployee.firstName} ${atualEmployee.lastName}`);
    return percorre;
  } throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
