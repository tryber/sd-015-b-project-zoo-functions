const data = require('../data/zoo_data');

function findAnimals(id) {
  const animal = data.employees.find((employee) => (employee.id === id)).responsibleFor;
  return animal;
}

function getOldestFromFirstSpecies(...ids) {
  let resultado = [];
  ids.forEach((id) => {
    const animalId = findAnimals(id)[0];
    const animal = data.species.find((specie) => specie.id === animalId);
    const animals = animal.residents.sort((a, b) => (a.age > b.age ? 1 : -1));
    const maisVelho = animals[animals.length - 1];
    resultado = [`${maisVelho.name}`, `${maisVelho.sex}`, maisVelho.age];
  });
  console.log(resultado);
  return resultado;
}

module.exports = getOldestFromFirstSpecies;
