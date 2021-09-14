const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const emptyObj = (animal) => {
  if (!animal) {
    return species.reduce((acc, current) => {
      const currentSpecie = current.name;
      const currentLength = current.residents.length;
      const obj = { [currentSpecie]: currentLength };
      return Object.assign(acc, obj);
    }, {});
  }
};

function countAnimals(animal) {
  if (!animal) {
    return emptyObj();
  }
  if (animal.sex) {
    const speciesGender = species.find((specie) => specie.name === animal.specie)
      .residents.filter((resident) => resident.sex === animal.sex);
    return speciesGender.length;
  }
  const speciee = species.find((specie) => specie.name === animal.specie);
  return speciee.residents.length;
}

console.log(countAnimals({ specie: 'elephants' }));
// .
module.exports = countAnimals;
