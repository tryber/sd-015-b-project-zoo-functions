const data = require('../data/zoo_data');

const { employees } = data;
function isManager(id) {
  // seu código aqui
  return employees.some((element) => element.managers.find((managers) => managers === id));
}

// console.log(isManager('56d43ba3-a5a7-40f6-8dd7-cbb05082383f')); console pra verificar se o return é true ou false

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

// console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992')); console pra verificar se está certa a funçao

module.exports = { isManager, getRelatedEmployees };
