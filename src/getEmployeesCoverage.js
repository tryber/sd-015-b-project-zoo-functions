const data = require('../data/zoo_data');

const { employees } = data;

const getAnimal = (...ids) => {
  const idsAnimais = [];
  const capturaIds = ids.forEach((id) => {
    idsAnimais.push(id);
  });
  return idsAnimais;
};

const noData = () => {
  const funcMap = employees.map((employee) => {
    const idsAnimais = employee.responsibleFor;
    return {
      id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      species: getAnimal(idsAnimais),
      locations: '0',
    };
  });
  const allData = (funcMap);
  return allData;
};

function getEmployeesCoverage(peopleId) {
  // seu código aqui
  if (!peopleId) return noData();
}
console.log(getEmployeesCoverage(''));

module.exports = getEmployeesCoverage;
