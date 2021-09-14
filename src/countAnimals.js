/* eslint-disable no-return-assign */
const data = require('../data/zoo_data');

const { species } = data;

const createAnimalObject = () => {
  const obj = {};
  species.forEach((element) => obj[element.name] = element.residents.length);

  return obj;
};

function countAnimals(animal = { specie: 'none' }) {
  // seu código aqui
  let aux = null;
  if (animal.specie === 'none') {
    aux = createAnimalObject();
  } else {
    const objAnimal = species.find((specie) => specie.name === animal.specie);
    if (!animal.gender) {
      aux = objAnimal.residents.length;
    } else {
      const countByGender = objAnimal.residents.filter((beast) =>
        beast.sex === animal.gender);
      aux = countByGender.length;
    }
  }
  return aux;
}

module.exports = countAnimals;
