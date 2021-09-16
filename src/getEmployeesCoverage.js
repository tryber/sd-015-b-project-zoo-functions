const data = require('../data/zoo_data');

const infosOfEmployees = data.employees.map((personInfo) => {
  const employeesInfo = {
    id: personInfo.id,
    fullName: `${personInfo.firstName} ${personInfo.lastName}`,
    species: personInfo.responsibleFor.map((animalID) =>
      data.species.find((animal) => animal.id === animalID).name),
    locations: personInfo.responsibleFor.map((animalID) =>
      data.species.find((animal) => animal.id === animalID).location),
  };
  return employeesInfo;
});

console.log(infosOfEmployees.find((teste) => teste.fullName === 'Nigel Nelson'));

function getEmployeesCoverage(searchParameter = infosOfEmployees) {
  const checkEmployees = infosOfEmployees.find((employee) =>
    employee.fullName.includes(searchParameter.name) || employee.id === searchParameter.id);
  if (searchParameter.name || searchParameter.id) {
    if (!checkEmployees) {
      throw new Error('Informações inválidas');
    }
    return checkEmployees;
  }
  return searchParameter;
}

module.exports = getEmployeesCoverage;
