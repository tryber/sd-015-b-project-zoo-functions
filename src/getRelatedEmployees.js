const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  const objEmployee = employees.some((employee) => employee.managers.includes(id));
  return objEmployee;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    return employees.filter((employee) => employee.managers.includes(managerId))
      .map((managed) => `${managed.firstName} ${managed.lastName}`);
  }
  if (isManager(managerId)
  === false) throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
// console.log(getRelatedEmployees('56d43ba3-a5a7-40f6-8dd7-cbb05082383f'));
