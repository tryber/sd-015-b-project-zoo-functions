const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  const list = {};
  if (!animal) {
    species.forEach((specie) => {
      list[specie.name] = specie.residents.length;
    });
    return list;
  }
  if (Object.keys(animal).length === 1) {
    const bicho = species.find((elem) => animal.specie === elem.name);
    return bicho.residents.length;
  }
  const bicho = species.find((elem) => animal.specie === elem.name);
  const bichoPorSexo = bicho.residents.filter((elem) => animal.gender === elem.sex);
  return bichoPorSexo.length;
}

module.exports = countAnimals;
