const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return employees.some((elem) => elem.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  const person = employees.filter((elem) => elem.managers.includes(managerId));
  const listOfCollaborationPersonResponsibleFor = person.map((elem) =>
    `${elem.firstName} ${elem.lastName}`);
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return listOfCollaborationPersonResponsibleFor;
}

module.exports = { isManager, getRelatedEmployees };
