const { species } = require('../data/zoo_data');

// fonte: https://github.com/tryber/sd-015-b-project-zoo-functions/pull/147/commits/8c09984e700cd2a921678499a9e7b82beaaafb3e
// filtro e mapeamento dos animais por sexo dos residentes de cada espécie
const createAnimalList = (options, specie) => specie.residents
  .filter((animal) => (options.sex && animal.sex === options.sex) || (!options.sex))
  .map((animal) => animal.name);

const getAnimalMap = (options = { includeNames: false, sorted: false, sex: false }) => {
  const result = species.reduce((objectStatic, specie) => {
    if (options.includeNames) { // if true
      const animalList = createAnimalList(options, specie);
      if (options.sorted) animalList.sort();// if true, ordena
      objectStatic[specie.location].push({ [specie.name]: animalList });// push da espécie para a localização especifica
    } else {
      objectStatic[specie.location].push(specie.name);
    }
    return objectStatic;
  }, { NE: [], NW: [], SE: [], SW: [] });// objeto estático que recebera os animais
  return result;
};
module.exports = getAnimalMap;
