const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  return employees.some((subordinados) => subordinados.managers.includes(id));
}
function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const related = [];
  employees.forEach((subordinados) => {
    if (subordinados.managers.includes(managerId)) {
      related.push(`${subordinados.firstName} ${subordinados.lastName}`);
    }
  });
  return related;
}
module.exports = { isManager, getRelatedEmployees };
