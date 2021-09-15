const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// cria um array com o nome de todos os animais escolhido
const animalsNames = (animalName) => {
  const animalSpecie = species.find((animal) => animal.name === animalName);
  return animalSpecie.residents.map((animal) => animal.name);
};

// cria um objeto com a posição de todos os animais.
const locations = species.reduce((acc, animals) => {
  if (animals.location === 'NE') {
    acc.NE.push(animals.name);
    return acc;
  }
  if (animals.location === 'NW') {
    acc.NW.push(animals.name);
    return acc;
  }
  if (animals.location === 'SE') {
    acc.SE.push(animals.name);
    return acc;
  }
  acc.SW.push(animals.name);
  return acc;
}, { NE: [], NW: [], SE: [], SW: [] });

// cria um objeto com a posição de todos os animais e os nomes.
const locationsAndNames = species.reduce((acc, animals) => {
  if (animals.location === 'NE') {
    const animalSpecie = animals.name;
    const arrayNames = animalsNames(animalSpecie);
    acc.NE.push(objectNames);
    return acc;
  }
  if (animals.location === 'NW') {
    acc.NW.push(animalsNames(animals.name));
    return acc;
  }
  if (animals.location === 'SE') {
    acc.SE.push(animalsNames(animals.name));
    return acc;
  }
  acc.SW.push(animalsNames(animals.name));
  return acc;
}, { NE: [], NW: [], SE: [], SW: [] });

function getAnimalMap(options) {
  // seu código aqui
  if (!options) {
    return locations;
  }
}

console.log(locationsAndNames);

module.exports = getAnimalMap;
