const data = require('../data/zoo_data');
// Resolução baseada no repositório https://github.com/tryber/sd-015-b-project-zoo-functions/pull/130/commits/992ad207fc14935aa337da595b97d328cb829ade
function findAnimals(id) {
  const animal = data.employees.find((employee) => (employee.id === id)).responsibleFor;
  return animal;
}

function getOldestFromFirstSpecies(...ids) {
  let result = [];
  ids.forEach((id) => {
    const animalId = findAnimals(id)[0];
    const animal = data.species.find((specie) => specie.id === animalId);
    const animals = animal.residents.sort((a, b) => (a.age > b.age ? 1 : -1));
    const oldest = animals[animals.length - 1];
    result = [`${oldest.name}`, `${oldest.sex}`, oldest.age];
  });
  console.log(result);
  return result;
}

module.exports = getOldestFromFirstSpecies;
