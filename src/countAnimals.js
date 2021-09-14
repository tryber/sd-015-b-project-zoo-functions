const data = require('../data/zoo_data');

function countAnimals(obj) {
  if (!obj) {
    const all = {};
    data.species.forEach((specie) => {
      all[specie.name] = specie.residents.length;
    });
    return all;
  }
  const { specie: specieName, sex = 'both' } = obj;
  const actualSpecie = data.species.find((specie) => specie.name === specieName);
  if (sex === 'both') {
    return actualSpecie.residents.length;
  }
  return actualSpecie.residents.filter((individual) => individual.sex === sex).length;
}

module.exports = countAnimals;
