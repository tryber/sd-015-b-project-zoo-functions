const data = require('../data/zoo_data');

const { employees } = data;

// isManager consulta se o id passado está como valor em alguma chave (managers)
// O id é passado nessa forma 9e7d4524-363c-416a-8759-8aa7e50c0992
function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  const manager = isManager(managerId);
  // Caso manager for false retorna o erro abaixo
  if (!manager) throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  // Filtra dentro dos funcionario os que tem o gerente passado como parametro
  const managedEmployees = employees.filter((employee) => employee.managers.includes(managerId));
  // Faz um map com nome e sobre nome dos funcionarios que tem o gerente passado
  return managedEmployees.map(({ firstName, lastName }) => `${firstName} ${lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
