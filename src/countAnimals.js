const data = require('../data/zoo_data');

function countAnimals(animal) {
  // sem parâmetro
  if (!animal) {
    const animalSpecie = {};
    data.species.forEach(({ name, residents }) => {
      animalSpecie[name] = residents.length;
    });
    return animalSpecie;
  }

  // com parâmetro
  const specieSelected = data.species.find((specie) => specie.name === animal.specie);
  if (animal.sex) {
    const sex = specieSelected.residents.filter((resident) => resident.sex === animal.sex);
    return sex.length;
  }
  return specieSelected.residents.length;
}

module.exports = countAnimals;
