const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const employee = data.employees.find((employee) => employee.id === id);
  const animal = data.species.find((specie) => specie.id === employee.responsibleFor[0]);
  console.log(animal);
  animal.residents.sort((a, b) => b.age - a.age);
  {name, sex, age} = animal.residents[0];
}

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
