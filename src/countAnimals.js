const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  // seu código aqui

  if (animal === undefined) {
    const animalOccurrences = {};
    species.forEach((obj) => (animalOccurrences[obj.name] = obj.residents.length));

    return animalOccurrences;
  }
  const { specie: myAnimal } = animal;
  const { name, residents } = species.find((obj) => obj.name.includes(myAnimal.slice(0, -2)));
  const myAnimalOccurrences = {
    [name]: residents.length,
  };

  return myAnimalOccurrences;
}

module.exports = countAnimals;
