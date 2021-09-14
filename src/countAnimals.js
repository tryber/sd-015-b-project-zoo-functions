const data = require('../data/zoo_data');

const countWithoutParameters = () => {
  const animalsCount = data.species.reduce((acc, { name, residents }) => {
    acc[name] = residents.length;

    return acc;
  }, {});

  return animalsCount;
};

const countSpeciesByNameAndGender = (specie, gender) => {
  const filteredAnimals = data.species.find(({ name }) => specie === name);

  return filteredAnimals.residents.reduce((acc, { sex }) => (
    gender === sex ? acc + 1 : acc
  ), 0);
};

const countSpeciesByName = ({ specie, sex }) => {
  if (specie && !sex) {
    const animalsCount = data.species.reduce((acc, { name, residents }) => (
      specie === name ? acc + residents.length : acc
    ), 0);

    return animalsCount;
  }

  return countSpeciesByNameAndGender(specie, sex);
};

function countAnimals(animal) {
  // seu código aqui
  return !animal ? countWithoutParameters() : countSpeciesByName(animal);
}

module.exports = countAnimals;
