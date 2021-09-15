const data = require('../data/zoo_data');

const animals = (animal) => animal.reduce((acc, crr) => {
  acc[crr.name] = crr.residents.length;
  return acc;
}, {});

const countAnimals = (animal) => {
  if (!animal) return animals(data.species);

  const { residents } = data.species.find((specie) => specie.name === animal.specie);

  return (!animal.gender) ? residents.length
    : residents.filter((name) => name.sex === animal.gender).length;
};

// ref usado para consulta: https://github.com/tryber/sd-015-b-project-zoo-functions/commit/98a9ac4e69814b509d6b3dd07ad0b61a515d5ae8
module.exports = countAnimals;
