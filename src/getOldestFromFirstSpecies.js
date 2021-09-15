const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const firstSepciesId = data.employees.find((emp) => emp.id === id).responsibleFor[0];
  const firstSpecies = data.species.find((anm) => anm.id === firstSepciesId);
  const oldestAnimalAge = Math.max(...firstSpecies.residents.map((anm) => anm.age));

  const oldestAnimal = firstSpecies.residents.filter((res) => res.age === oldestAnimalAge);
  return [oldestAnimal[0].name, oldestAnimal[0].sex, oldestAnimal[0].age];
}
const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';

console.log(getOldestFromFirstSpecies(stephanieId));
module.exports = getOldestFromFirstSpecies;
