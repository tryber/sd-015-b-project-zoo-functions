const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return ({});

  const result = data.employees.find(({ firstName, lastName }) => {
    const verifyEmployee = firstName === employeeName || lastName === employeeName;

    return verifyEmployee;
  });

  return result;
}

module.exports = getEmployeeByName;
