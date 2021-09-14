const data = require('../data/zoo_data');

const ruleUndefined = (acc, specie) => {
  acc[specie.name] = specie.residents.length;
  return acc;
};

const ruleSpecie = (acc, specie, spec) =>
  (specie.name === spec ? specie.residents.length : acc);

const ruleGetGender = (specie, gen) => {
  const result = specie.residents.reduce((acc, resident) =>
  resident.sex === gen ? acc += 1 : acc, 0);
  return result;
};

const ruleSpecieAndGender = (acc, specie, spec, gen) =>
  (specie.name === spec ? ruleGetGender(specie, gen) : acc);

const myReduce = (spec, gen, func, defaultValue) =>
  data.species.reduce((acc, specie) => func(acc, specie, spec, gen), defaultValue);

const animalNotFound = () =>
  myReduce(undefined, undefined, ruleUndefined, {});

const animalFound = (specie, gender) =>
  (gender === undefined ? myReduce(specie, gender, ruleSpecie, 0)
    : myReduce(specie, gender, ruleSpecieAndGender, 0));

const countAnimals = (...animal) =>
  (animal.length === 0 ? animalNotFound()
    : animalFound(animal[0].specie, animal[0].gender));

module.exports = countAnimals;
