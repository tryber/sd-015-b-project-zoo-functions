const { employees } = require('../data/zoo_data');

// seu código aqui
const isManager = (id) => employees.some((employee) => employee.managers.includes(id));

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId)) {
    return employees.filter((employee) => employee.managers
      .includes(managerId)).map((fullName) => `${fullName.firstName} ${fullName.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
