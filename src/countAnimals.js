const data = require('../data/zoo_data');

function countAnimals(obj) {
  if (!obj) {
    const all = {};
    data.species.forEach((specie) => {
      all[specie.name] = specie.residents.length;
    });
    return all;
  }
  const { specie: specieName, gender = 'both' } = obj;
  const actualSpecie = data.species.find((specie) => specie.name === specieName);
  if (gender === 'both') {
    return actualSpecie.residents.length;
  }
  return actualSpecie.residents.filter((individual) => individual.sex === gender).length;
}

module.exports = countAnimals;
