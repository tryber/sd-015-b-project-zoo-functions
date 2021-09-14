const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((employee) =>
    employee.managers.includes(id));
}

// - se for gerente, retorna array contendo os nomes das pessoas colaboradoras que ela é responsável;
// - se não, throw error: "O id inserido não é de uma pessoa colaboradora gerente!".
function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } else {
    const employeeList = employees.filter((employee) =>
      employee.managers.includes(managerId));
    return employeeList.map((employee) =>
      `${employee.firstName} ${employee.lastName}`);
  }
}

module.exports = { isManager, getRelatedEmployees };
