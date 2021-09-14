const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(...id) {
  const resultado = employees.some((elemento) => elemento.managers.includes(id.toString()));
  return resultado;
}

function getRelatedEmployees(...managerId) {
  const test = employees.some((elemento) => elemento.managers.includes(managerId.toString()));

  if (test) {
    const test2 = employees.filter((elemento) => elemento.managers.includes(managerId.toString()));
    const resultado = test2.reduce((acumulador, elemento2) => acumulador
      .concat(`${elemento2.firstName} ${elemento2.lastName}`), []);
    return resultado;
  }

  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
console.log(getRelatedEmployees('fdb2543b-5662-46a7-badc-93d960fdc0a8'));
module.exports = { isManager, getRelatedEmployees };
