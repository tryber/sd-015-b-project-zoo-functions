const { database } = require('faker/locale/zh_TW');
const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const residentsAnimal = (name, { sex }) => {
  const animal = species.find((especie) => especie.name === name);
  if (sex) {
    const filterBySex = animal.residents.filter((specie) => specie.sex === sex);
    const residentNames = filterBySex.map((specie) => specie.name);
    return residentNames;
  }
  const residentNames = animal.residents.map((specie) => specie.name);
  return residentNames;
};

const searchAnimalName = (name, options) => {
  const animal = {};
  if (options.sorted) {
    animal[name] = residentsAnimal(name, options).sort();
    return animal;
  }
  animal[name] = residentsAnimal(name, options);
  return animal;
  // retorna objeto animal com array como valor
};

const searchByLocation = (location, options) => {
  const animalByLocation = species
    .filter((spiece) => spiece.location === location)
    .map((spiece) => spiece.name);
  const arrayDeAnimais = animalByLocation.map((animal) =>
    searchAnimalName(animal, options));
  return arrayDeAnimais; // [
  //   { frogs: [ 'Cathey', 'Annice' ] },
  //   { snakes: [ 'Paulette', 'Bill' ] }
  // ]
};

const searchAnimalwitchoutArg = (local) => {
  const animaisLocal = data.species.filter(
    (especie) => especie.location === local,
  );
  const nomesDosAnimais = animaisLocal.map((nome) => nome.name);
  return nomesDosAnimais;
};
const searchAnimalwitchArg = (options) => ({
  NE: searchByLocation('NE', options),
  NW: searchByLocation('NW', options),
  SE: searchByLocation('SE', options),
  SW: searchByLocation('SW', options),
});
const allAnimals = () => ({
  NE: searchAnimalwitchoutArg('NE'),
  NW: searchAnimalwitchoutArg('NW'),
  SE: searchAnimalwitchoutArg('SE'),
  SW: searchAnimalwitchoutArg('SW'),
}); // retorna um objeto com a localização como chave e os animais como valores de um array.

function getAnimalMap(options) {
  // seu código aqui
  if (!options || !options.includeNames) {
    return allAnimals();
  }
  return searchAnimalwitchArg(options);
}

module.exports = getAnimalMap;
