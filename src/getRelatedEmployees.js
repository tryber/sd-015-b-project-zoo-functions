const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  // checar se esse id aparece em algum managers
  const checkManager = employees.some((elemento) => {
    const manag = elemento.managers;
    if (manag.includes(id)) {
      return true
    }
    return false
  })
  return checkManager;
}

function getRelatedEmployees(managerId) {
  // recolhe os gerentes
  if (isManager(managerId) === true) {
    return employees.filter((elemento) => {
      if (elemento.managers.includes(managerId)) {
        const arrayEmp = [];
        return arrayEmp.push(`${elemento.firstName} ${elemento.lastName}`);
      };
    });
  }
  // recolhido do exemplo no README.md
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };

console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));