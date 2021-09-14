const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  // de acordo com o teste, quando o parametro é indefinido/ vazio, ele retorna um objeto vazio
  return employees.find(({ firstName, lastName }) => employeeName.includes(firstName)
  || employeeName.includes(lastName));
  // faz o find e desestrutura o objeto para então verificar se esse objeto descontriudo tem o nome pesquisado
  // ele testa 1 o nome e depois o sobrenome.
}

module.exports = getEmployeeByName;
