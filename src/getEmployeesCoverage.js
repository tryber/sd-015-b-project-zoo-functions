const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');
const getSpecies = require('./getSpeciesByIds');

const getSpeciesByIds = (id) => employees.find((empregado) => empregado.id === id).responsibleFor;

function acheiElas(id) {
  return getSpecies(...getSpeciesByIds(id))
    .map((obj) => obj.name);
}

function acheiEles(id) {
  return getSpecies(...getSpeciesByIds(id))
    .map((obj) => obj.location);
}

const objEmployees = (empregado) => ({
  id: empregado.id,
  fullName: `${empregado.firstName} ${empregado.lastName}`,
  species: acheiElas(empregado.id),
  locations: acheiEles(empregado.id),
});

const AllEmployees = () => {
  const todosFuncionarios = [];
  employees.forEach((empregado) => {
    const funcionario = {
      id: empregado.id,
      fullName: `${empregado.firstName} ${empregado.lastName}`,
      species: acheiElas(empregado.id),
      locations: acheiEles(empregado.id),
    };
    todosFuncionarios.push(funcionario);
  });
  return todosFuncionarios;
};

function getEmployeesCoverage(option) {
  // seu código aqui
  if (!option) { return AllEmployees(); }

  const { name, id } = option;
  const throughName = employees.find((empregado) => empregado.firstName === name);
  const throughLast = employees.find((empregado) => empregado.lastName === name);
  const throughId = employees.find((empregado) => empregado.id === id);

  if (throughName) { return objEmployees(throughName); }
  if (throughLast) { return objEmployees(throughLast); }
  if (throughId) { return objEmployees(throughId); }
  throw new Error('Informações inválidas');
}

module.exports = getEmployeesCoverage;
