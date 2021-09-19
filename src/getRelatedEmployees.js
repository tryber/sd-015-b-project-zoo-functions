// Consultei o repositório do Erickson Siqueira para realizar esse requisito, link -  https://github.com/tryber/sd-015-b-project-zoo-functions/pull/65/commits/c7dc5f863b0385cc4ec1529146b2a626059ecfef

const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const emplooyesWithManager = (employee) => employee.managers.length > 0;
function isManager(id) {
  // seu código aqui
  const compareIds = (managersId) => managersId === id;
  const manager = employees.some((employee) => employee.managers.find(compareIds));
  return manager;
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId) !== true) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } else {
    const managed = employees.filter(emplooyesWithManager);
    const emp = managed.filter((employee) => employee.managers.some((id) => id === managerId));
    const emplooyesNames = emp.map(({ firstName, lastName }) => `${firstName} ${lastName}`);
    return emplooyesNames;
  }
}

module.exports = { isManager, getRelatedEmployees };
