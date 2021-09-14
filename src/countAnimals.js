const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  // seu código aqui
  if (animal === undefined) {
    const animalOccurrences = {};
    species.forEach((obj) => {
      animalOccurrences[obj.name] = obj.residents.length;
    });

    return animalOccurrences;
  }
  const { specie: myAnimal, gender: animalGender } = animal;
  if (animalGender === undefined) {
    const { residents } = species.find((obj) => obj.name.includes(myAnimal.slice(0, -2)));

    return residents.length;
  }
  const { residents } = species.find((obj) => obj.name.includes(myAnimal.slice(0, -2)));
  const genderResidents = residents.filter(({ sex }) => sex === animalGender);

  return genderResidents.length;
}

module.exports = countAnimals;
