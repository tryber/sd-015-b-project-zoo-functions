// Agradecimentos à Caról, Nícolas Firmo e Claudio Cassimiro por me ajudarem a entender onde eu estava errando no meu código e a entender como acessar um parâmetro que não estava conseguindo.

const data = require('../data/zoo_data');

const { species } = data;

// const { specie = species.name } = data;

const lastOption = (animal) => {
  const elementNoGender = species.find(((element) => element.name === animal.specie));
  const countWithGender = elementNoGender.residents.filter((elt) => elt.sex === animal.sex);
  return countWithGender.length;
};

function countAnimals(animal) {
  // seu código aqui
  if (!animal) {
    const listOfSpecies = species.reduce((accumulator, { name, residents }) => {
      accumulator[name] = residents.length;
      // console.log('entrou no reduce');
      return accumulator;
    }, {});
    return listOfSpecies;
  }

  if (!animal.sex) {
    const elementNoGender = species.find(((element) => element.name === animal.specie));
    // console.log(animal.specie);
    return elementNoGender.residents.length;
  }

  return lastOption(animal);
}

// console.log(countAnimals({ specie: 'bears', sex: 'female' }));

module.exports = countAnimals;
