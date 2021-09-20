const data = require('../data/zoo_data');

// estava muito confusso sobre esse requisito e olhei o repositorio da danielencestari
// https://github.com/tryber/sd-015-b-project-zoo-functions/commit/f48fbc4a40e71e5bfc27a5f6acfa654436e5e5a2
function isManager(id) {
  return data.employees.some((element) => element.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  const gerente = data.employees.filter((element) => element.managers.includes(managerId));
  const nome = gerente.map((elemento) => `${elemento.firstName} ${elemento.lastName}`);
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return nome;
}
module.exports = { isManager, getRelatedEmployees };
