const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(...employeeName) {
  // A função receberá um nome completo ou um nome parcial de uma pessoa
  const splitedName = [];
  employeeName.forEach((currentName) => {
    splitedName.push(currentName.split(' '));
  });
  // O Objeto que contém a lista de pessoas funcionárias contém as chaves {firstName, lastName}
  // Será verificado, dado um nome, se esse nome corresponde ao conteúdo de uma das chaves do nome da pessoa funcionária.
  // Passo 1: Obter os nomes da pessoa
  // Passo 2: Verificar se algum desses nomes corresponde ao parâmetro recebido
  return splitedName.forEach((name) => data.employees.filter((employee) => name.includes(employee.firstName) || name.includes(employee.lastName)));
}
console.log(getEmployeeByName('Wilburn Wishart'));

module.exports = getEmployeeByName;
