const data = require('../data/zoo_data');

const ruleUndefined = (acc, specie) => {
  acc[specie.name] = specie.residents.length;
  return acc;
};

const ruleSpecie = (acc, specie, spec) =>
  specie.name === spec ? specie.residents.length : acc;

const ruleSpecieAndGender = (acc, specie, spec, gen) =>
  specie.name === spec ?
    specie.residents.reduce((acc, resident) =>
      resident.sex === gen ?
        acc += 1 :
          acc, 0) :
            acc;

const myReduce = (spec, gen, func, defaultValue) =>
  data.species.reduce((acc, specie) => {
    acc = func(acc, specie, spec, gen);
    return acc;
  }, defaultValue);


  const animalNotFound = () =>
    myReduce(undefined, undefined, ruleUndefined, {});

  const animalFound = (specie, gender) => {
    let result;
    if (gender === undefined) {
      result = myReduce(specie, gender, ruleSpecie, 0);
    } else {
      result = myReduce(specie, gender, ruleSpecieAndGender, 0);
    }
    return result;
  };

const countAnimals = (...animal) => {
  let result = {};
  if (animal.length === 0) {
    result = animalNotFound();
  } else {
    const {specie, gender} = animal[0];
    result = animalFound(specie, gender);
  }
  return result;
};

module.exports = countAnimals;
