const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal = { specie: 'none' }) {
  // seu código aqui
  let count = 0;

  if (animal.specie === 'none') {
    count = {};
    species.forEach((specie) => { count[`${(specie).name}`] = specie.residents.length; });
  } else {
    const animalObj = species.find((specie) => specie.name === animal.specie);
    if (!animal.gender) {
      count = animalObj.residents.length;
    } else {
      const contByGender = animalObj.residents.filter((beast) => beast.sex === animal.gender);
      count = contByGender.length;
    }
  }
  return count;
}

module.exports = countAnimals;
