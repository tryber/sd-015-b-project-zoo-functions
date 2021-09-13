const data = require('../data/zoo_data');

const { species } = data;

const withoutParameter = species.reduce((accumulator, element) => {
  const speciesName = element.name;
  const residents = element.residents.length;
  const object = { [speciesName]: residents };
  return Object.assign(accumulator, object);
}, {});

function countAnimals(animal) {
  // seu código aqui
  if (!animal) {
    return withoutParameter;
  }
  if (animal.specie && animal.gender) {
    const animalGender = species.find((specie) => specie.name === animal.specie).residents
      .filter((resident) => animal.gender === resident.sex);
    return animalGender.length;
  }
  const animalSpecie = species.find((specie) => specie.name === animal.specie);
  return animalSpecie.residents.length;
}

const actual = countAnimals({ specie: 'giraffes' });
console.log(actual);

module.exports = countAnimals;
