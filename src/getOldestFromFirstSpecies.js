const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const firstEmployee = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  const firstAnimal = data.species.find((specie) => specie.id === firstEmployee).residents;
  return Object.values(firstAnimal.reduce((acc, curr) => ((acc.age < curr.age) ? curr : acc)));
  // se o acumulador da idade for menor que o valor corrente da idade, retorna verdadeiro ou falso, de acordo com a entrada
}

module.exports = getOldestFromFirstSpecies;
