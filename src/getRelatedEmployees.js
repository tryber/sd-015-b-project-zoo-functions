const data = require('../data/zoo_data');
const { employees } = data;
function isManager(id) {
  // seu código aqui
  return employees.some((element) => element.managers.find((managers) => managers === id));
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId)) {
    const colaborators = employees.filter(({ managers }) => managers
      .find((element) => element === managerId))
      .map(({ firstName, lastName }) => `${firstName} ${lastName}`);
    return colaborators;
  }

  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
