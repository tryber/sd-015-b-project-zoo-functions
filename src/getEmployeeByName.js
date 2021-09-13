const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  return employees.find((name) =>
    name.firstName === employeeName || name.lastName === employeeName);
}

module.exports = getEmployeeByName;

// Esta função é responsável pela busca das pessoas colaboradoras através do primeiro ou do último nome delas:
// - Sem parâmetros, retorna um objeto vazio
// - Quando provido o primeiro nome do funcionário, retorna o objeto do funcionário
// - Quando provido o último nome do funcionário, retorna o objeto do funcionário
