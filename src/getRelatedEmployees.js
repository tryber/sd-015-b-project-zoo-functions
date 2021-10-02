const { employees } = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  const manager = employees.some((idManager) => idManager.managers.includes(id));
  // console.log(manager);
  return manager;
}

// isManager('b0dc644a-5335-489b-8a2c-4e086c7819a2')

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId)) {
    const employer = employees.filter((manager) => manager.managers.includes(managerId));

    const name = employer.map((managerName) => `${managerName.firstName} ${managerName.lastName}`);
    // console.log(manager)
    return name;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
// getRelatedEmployees("9e7d4524-363c-416a-8759-8aa7e50c0992")

module.exports = { isManager, getRelatedEmployees };
