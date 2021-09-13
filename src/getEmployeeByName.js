const { employees } = require("../data/zoo_data");
const data = require("../data/zoo_data");

function getEmployeeByName(employeeName) {
  const dataEmployeeFinded = data.employees
    .find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);
  return dataEmployeeFinded == null ? {} : dataEmployeeFinded;
}

module.exports = getEmployeeByName;
