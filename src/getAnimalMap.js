const data = require('../data/zoo_data');

const { species } = data;

const animalMap = () => species.reduce((acc, animal) => {
  acc[animal.location].push(animal.name);
  return acc;
}, { NE: [], NW: [], SE: [], SW: [] });

const namedAnimalsFilter = (sex, animal) => {
  if (!sex) return animal.residents.map((namedAnimals) => namedAnimals.name);
  return animal.residents.filter((animalSex) => animalSex.sex === sex)
    .map((namedAnimals) => namedAnimals.name);
};

const namedAnimalsFinal = (sorted, sex, animal) => {
  const animalArray = namedAnimalsFilter(sex, animal);
  if (sorted) return animalArray.sort();
  return animalArray;
};

const namedMap = (options) => species.reduce((acc, animal) => {
  acc[animal.location]
    .push({ [animal.name]: namedAnimalsFinal(options.sorted, options.sex, animal) });
  return acc;
}, { NE: [], NW: [], SE: [], SW: [] });

function getAnimalMap(options) {
  if (!options || !options.includeNames) return animalMap();
  return namedMap(options);
}

console.log(getAnimalMap());

module.exports = getAnimalMap;
