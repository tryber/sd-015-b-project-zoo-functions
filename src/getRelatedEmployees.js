const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  const check = isManager(managerId);

  if (check === true) {
    const collaborators = data.employees.filter((employee) =>
      employee.managers.includes(managerId));
    return (collaborators.map((collabName) => `${collabName.firstName} ${collabName.lastName}`));
  }

  if (check === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
}
getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992');

module.exports = { isManager, getRelatedEmployees };
