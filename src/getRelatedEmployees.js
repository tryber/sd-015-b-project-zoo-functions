const data = require('../data/zoo_data');

function isManager(id) {
  // verifica se é gerente ou não
  const findManage = data.employees.filter((findId) => findId.id === id).shift();
  return findManage.managers.length !== 0;
}

const colaborator = (idcolabe) => data.employees.filter((findId) => findId.id === idcolabe);
function getRelatedEmployees(managerId) {
  const getManager = isManager(managerId);
  const getIdPeople = colaborator(managerId).shift().responsibleFor;
  const error = new Error('O id inserido não é de uma pessoa colaboradora gerente!');

  return (getManager) ? getIdPeople : error;
}

console.log(getRelatedEmployees('56d43ba3-a5a7-40f6-8dd7-cbb05082383f'));
// [ 'Burl Bethea', 'Ola Orloff', 'Emery Elser' ]
module.exports = { isManager, getRelatedEmployees };
