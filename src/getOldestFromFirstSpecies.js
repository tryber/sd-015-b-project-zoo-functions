const data = require('../data/zoo_data');

// I make a function to do this with an array
function getOldestFromFirstSpecies(...ids) {
  const oldestFromSpecieArray = ids.map((id) => {
    const firstSpecie = data.employees.find((element) => element.id === id).responsibleFor[0];
    const firstSpecieArray = data.species.find((element) => element.id === firstSpecie).residents;
    const maxAgeAnimal = firstSpecieArray.sort((a, b) => b.age - a.age)[0];
    const { name, sex, age } = maxAgeAnimal;
    return [name, sex, age];
  });
  if (ids.length === 1) {
    return oldestFromSpecieArray.flat();
  }
  return oldestFromSpecieArray;
}

module.exports = getOldestFromFirstSpecies;
