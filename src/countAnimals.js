const data = require('../data/zoo_data');

const noParams = () =>
  data.species.reduce((acc, specie) => {
    acc[specie.name] = specie.residents.length;
    return acc;
  }, {});

function countAnimals(animal) {
  if (!animal) {
    return noParams();
  }
  if (animal.specie && animal.sex) {
    const findAnimalName = data.species.find(
      (specieByName) => specieByName.name === animal.specie,
    );
    const findAnimalbyGender = findAnimalName.residents.filter(
      (resident) => resident.sex === animal.sex,
    );
    return findAnimalbyGender.length;
  }
  const findAnimalName = data.species.find(
    (specieByName) => specieByName.name === animal.specie,
  );
  return findAnimalName.residents.length;
}

module.exports = countAnimals;
