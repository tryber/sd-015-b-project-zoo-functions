const data = require('../data/zoo_data');

// ver se a id da pessoa ta na lista de gerentes de alguem

function isManager(id) {
  const managers = ['0e7b460e-acf4-4e17-bcb3-ee472265db83', 'fdb2543b-5662-46a7-badc-93d960fdc0a8',
    'b0dc644a-5335-489b-8a2c-4e086c7819a2', '9e7d4524-363c-416a-8759-8aa7e50c0992'];
  return managers.some((manager) => manager === id);
}

function getRelatedEmployees(managerId) {
  // managerId = ismanager();
  const resposta = [];
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  // const employeeObject = data.employees.filter((employee) => employee.managers.includes(managerId));
  data.employees.forEach((employee) => {
    if (employee.managers.includes(managerId)) {
      resposta.push(`${employee.firstName} ${employee.lastName}`);
    }
  });
  console.log(resposta);
  return resposta;
}
getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992');

module.exports = { isManager, getRelatedEmployees };
