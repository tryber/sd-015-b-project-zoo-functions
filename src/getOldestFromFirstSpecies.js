const { employees, species } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const pesquisarIDFunc = employees.find((idFunc) =>
    id.includes(idFunc.id)).responsibleFor[0];

  const pesquisaAnimalMaisvelho = species.find((especies) => especies.id === pesquisarIDFunc)
    .residents.sort((a, b) => b.age - a.age)
    .map((animal) => [animal.name, animal.sex, animal.age])[0];

  return pesquisaAnimalMaisvelho;
}

module.exports = getOldestFromFirstSpecies;
