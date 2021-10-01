const { species } = require('../data/zoo_data');

function findAnimal({ specie, sex }) {
  return (
    species.find(({ name }) => (
      name === specie
    ))
  );
}

function countAnimals(animal) {
  if (!animal) {
    const newAnimal = {};
    species.forEach(({ name, residents }) => {
      newAnimal[name] = residents.length;
    });
    return newAnimal;
  }

  if (animal.sex) {
    return (
      findAnimal(animal).residents.filter(({ sex }) => (
        sex === animal.sex
      )).length
    );
  }
  return findAnimal(animal).residents.length;
}

module.exports = countAnimals;
