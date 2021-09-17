const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    const numberOfAnimals = {};
    data.species.forEach((element) => {
      numberOfAnimals[element.name] = element.residents.length;
    });
    return numberOfAnimals;
  }
  let sex = false;
  if (Object.keys(animal).includes('sex')) sex = animal.sex;
  const findBySpecie = data.species.find((specie) => specie.name === animal.specie);
  const filter = findBySpecie.residents.filter((resident) => {
    if (sex) return resident.sex === sex;
    return resident;
  });
  return filter.length;
}

module.exports = countAnimals;
