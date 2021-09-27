const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  const recoverEmpManagers = employees.map((emp) => emp.managers.some((manager) => manager === id));
  const verifyManagement = recoverEmpManagers.some((boo) => boo === true);

  return verifyManagement;
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId) === true) {
    const seeEmployees = employees.filter((emp) => emp.managers.find((id) => id === managerId));
    const returnName = seeEmployees.map((empNames) => {
      const first = empNames.firstName;
      const last = empNames.lastName;
      return `${first} ${last}`;
    });

    return returnName;
  }

  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
