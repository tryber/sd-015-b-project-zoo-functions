const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const objEmpty = species.reduce((acc, current) => {
  const currentSpecieName = current.name;
  const currentSpecieLength = current.residents.length;
  const tempObj = { [currentSpecieName]: currentSpecieLength };
  return Object.assign(acc, tempObj);
}, {});

function countAnimals(animal) {
  if (!animal) {
    return objEmpty;
  }
  if (animal.gender && animal.specie) {
    const specie2 = species.find((specie) => specie.name === animal.specie).residents
      .filter((resident) => animal.gender === resident.sex);
    return specie2.length;
  }
  if (animal.specie) {
    const specie1 = species.find((specie) => specie.name === animal.specie);
    return specie1.residents.length;
  }
}

// console.log(countAnimals({ specie: 'giraffes', gender: 'female' }));
module.exports = countAnimals;
