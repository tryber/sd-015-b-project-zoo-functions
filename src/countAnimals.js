const data = require('../data/zoo_data');

const ruleUndefined = (acc, specie) => {
  acc[specie.name] = specie.residents.length;
  return acc;
};

const ruleSpecie = (acc, specie, spec) =>
  (specie.name === spec ? specie.residents.length : acc);

const ruleGetGender = (specie, gen) =>
  (specie.residents.filter((resident) => resident.sex === gen).length);

const ruleSpecieAndGender = (acc, specie, spec, gen) =>
  (specie.name === spec ? ruleGetGender(specie, gen) : acc);

const myReduce = (spec, gen, func, defaultValue) =>
  data.species.reduce((acc, specie) => func(acc, specie, spec, gen), defaultValue);

const animalNotFound = () =>
  myReduce(undefined, undefined, ruleUndefined, {});

const animalFound = (specie, sex) =>
  (sex === undefined ? myReduce(specie, sex, ruleSpecie, 0)
    : myReduce(specie, sex, ruleSpecieAndGender, 0));

const countAnimals = (...animal) =>
  (animal.length === 0 ? animalNotFound()
    : animalFound(animal[0].specie, animal[0].sex));

module.exports = countAnimals;
