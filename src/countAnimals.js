const data = require('../data/zoo_data');

const countWithoutParameters = () => {
  const animalsCount = data.species.reduce((acc, { name, residents }) => {
    acc[name] = residents.length;

    return acc;
  }, {});

  return animalsCount;
};

const countSpeciesByName = ({ specie }) => {
  const animalsCount = data.species.reduce((acc, { name, residents }) => (
    specie === name ? acc + residents.length : acc
  ), 0);

  return animalsCount;
};

const countSpeciesByNameAndGender = ({ specie, gender }) => {
  const filteredAnimals = data.species.find(({ name }) => specie === name);

  return filteredAnimals.residents.reduce((acc, { sex }) => (
    gender === sex ? acc + 1 : acc
  ), 0);
};

function countAnimals(animal) {
  // seu código aqui
  if (!animal) return countWithoutParameters();

  const keys = Object.keys(animal);

  if (keys.length === 1) return countSpeciesByName(animal);

  if (keys.length > 1) return countSpeciesByNameAndGender(animal);
}

module.exports = countAnimals;
