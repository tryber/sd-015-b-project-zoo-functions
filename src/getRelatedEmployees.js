const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  // `getRelatedEmployees` - que utiliza a primeira função para apresentar as seguintes saídas:
  // * se for uma pessoa colaboradora gerente, deve retornar um array contendo os nomes das pessoas colaboradoras que ela é responsável;
  // * se **não** for uma pessoa colaboradora gerente, deverá ser lançado um erro gerado com a função construtora **Error** da biblioteca padrão do JavaScript com a mensagem **"O id inserido não é de uma pessoa colaboradora gerente!"**.
  if (isManager(managerId) === true) {
    const responsibleFor = [];
    employees.map((employee) => {
      if (employee.managers.includes(managerId)) {
        responsibleFor.push(`${employee.firstName} ${employee.lastName}`);
      }
      return responsibleFor;
    }); return responsibleFor;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

getRelatedEmployees(stephanieId);

module.exports = { isManager, getRelatedEmployees };
