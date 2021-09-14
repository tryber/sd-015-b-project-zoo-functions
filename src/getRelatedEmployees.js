const data = require('../data/zoo_data');

const isManager = (id) => data.employees.some((employee) =>
  Object.values(employee.managers).find((manager) =>
    manager === id));

const getEmpoyees = (employees, managerId) =>
  employees.reduce((acc, employee) => {
    if (employee.managers.some((manager) => manager === managerId)) 
      acc.push(`${employee.firstName} ${employee.lastName}`);
    return acc;
  }, []);

const getRelatedEmployees = (managerId, func = getEmpoyees) => {
  if (!isManager(managerId))
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  return func(data.employees, managerId);
};

module.exports = { isManager, getRelatedEmployees };
