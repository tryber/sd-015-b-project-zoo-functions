const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const employedId = data.employees.find((elemento) => elemento.id === id);
  const respondibleAnimal = employedId.responsibleFor;
  const getFirstSpecie = respondibleAnimal[0];
  const getAnimals = data.species.find((elementor) => elementor.id === getFirstSpecie);
  const sortResidents = getAnimals.residents.sort((a, b) => b.age - a.age);
  const newArray = [];
  sortResidents.forEach((animal) => newArray.push([animal.name, animal.sex, animal.age]));
  return newArray[0];
}
console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
