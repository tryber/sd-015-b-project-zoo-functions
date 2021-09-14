const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const employe = employees.find((ondeEstou) => ondeEstou.id === id);
  const firstAnimal = employe.responsibleFor[0];
  const animalActual = species.find((animals) => animals.id === firstAnimal);
  const animalMoreOld = animalActual.residents.sort((a, b) => b.age - a.age)[0];
  return [animalMoreOld.name,
    animalMoreOld.sex,
    animalMoreOld.age];
}

module.exports = getOldestFromFirstSpecies;
