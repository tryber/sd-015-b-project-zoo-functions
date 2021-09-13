const data = require('../data/zoo_data');

const allAnimalsCount = () => {
  const { species } = data;
  const count = species.reduce((acc, {name, residents}) => {
    acc[name] = residents.length
    return acc;
  }, {});
  return count;
};

const selectedAnimalCount = (specie, gender) => {
  const actualSpecie = data.species.find(({ name }) => name === specie);
  const count = gender
    ? actualSpecie.residents
      .filter(({ sex }) => sex === gender).length
    : actualSpecie.residents.length;
  return count;
};

function countAnimals(animal) {
  // seu código aqui
  const count = animal ? selectedAnimalCount(animal.specie, animal.gender) : allAnimalsCount();
  return count;
}

module.exports = countAnimals;
