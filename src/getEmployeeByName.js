const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  return employeeName === undefined ? {} : employees
    .find((names) => (names.firstName === employeeName
    || names.lastName === employeeName));
  //  faço um operador ternário, o valor que eu recebi é indefinido?
  //  é uma função sem parametro? se sim devolva um objeto vazio
  //  se não jogue esse parametro no find. utilizando as chaves fistname
  //  ou lastname. Caso algum seja igual ao parametro da função. Retornar
  // o objeto que essa chave está inserida.
}

// seu código aqui
module.exports = getEmployeeByName;
