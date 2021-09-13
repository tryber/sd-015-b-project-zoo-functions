const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// Iniciei porém não conclui
function getAnimalsOlderThan(animal, age) {
  const test = species.filter((specie) => specie.name === animal);
  const test2 = test.every((specie, index) => {
    const animals = specie.residents;
    return animals[index].age >= age;
  });
  return test2;
}

console.log(getAnimalsOlderThan('penguins', 10));

module.exports = getAnimalsOlderThan;
