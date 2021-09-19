const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  if (!animal) {
    const resultList = {};

    species.forEach((specie) => {
      const count = specie.residents.length;
      resultList[specie.name] = count;
    });
    return resultList;
  }

  const { specie, sex } = animal;
  const getAnimal = species.find((resultAnimal) => resultAnimal.name === specie);
  const getGender = getAnimal.residents.filter((result) => result.sex === sex);
  const [countAnimal, countGender] = [getAnimal.residents.length, getGender.length];
  return sex === undefined ? countAnimal : countGender;
}
module.exports = countAnimals;
