const { species } = require('../data/zoo_data');

const countAllAnimals = (speciesArray) => speciesArray
  .reduce((result, { name, residents }) => ({ ...result, [name]: residents.length }), {});

const countSpecificAnimals = (speciesArray, { sex, specie }) => (sex === undefined
  ? speciesArray.find(({ name }) => name === specie).residents.length
  : speciesArray.find(({ name }) => name === specie).residents
    .filter((resident) => resident.sex === sex).length);

const countAnimals = (animal) => (animal === undefined
  ? countAllAnimals(species) : countSpecificAnimals(species, animal));

module.exports = countAnimals;
