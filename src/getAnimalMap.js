const data = require('../data/zoo_data');

const mapWithoutParameters = () => {
  const animalsMap = data.species.reduce((acc, { location, name }) => {
    acc[location] = acc[location] || [];
    acc[location].push(name);

    return acc;
  }, {});

  return animalsMap;
};

const sortAnimalsName = (sorted, animalsName, specie) => {
  const arrOfNames = animalsName;

  if (sorted) {
    arrOfNames[specie].sort();
  }

  return arrOfNames;
};

const getAnimalsName = (specie, animalsList, sorted, animalsSex) => {
  const animalsName = animalsList.residents.reduce((acc, { name, sex }) => {
    acc[specie] = acc[specie] || [];

    if (animalsSex === sex) acc[specie].push(name);

    if (!animalsSex) acc[specie].push(name);

    return acc;
  }, {});

  const sortedArrayOfAnimals = sortAnimalsName(sorted, animalsName, specie);

  return sortedArrayOfAnimals;
};

const mapWithAnimalNames = (sorted, animalsSex) => {
  const animalsMap = data.species.reduce((acc, currentSpecie) => {
    const { location, name } = currentSpecie;
    acc[location] = acc[location] || [];
    const arrOfAnimalsName = getAnimalsName(name, currentSpecie, sorted, animalsSex);
    acc[location].push(arrOfAnimalsName);

    return acc;
  }, {});

  return animalsMap;
};

const verifyData = (includeNames, sorted, sex) => {
  if (!includeNames && sex === 'female') return mapWithoutParameters();

  const isMapBySort = includeNames && !sex;

  const map = isMapBySort ? mapWithAnimalNames(sorted) : mapWithAnimalNames(sorted, sex);

  return map;
};

function getAnimalMap(options) {
  // seu código aqui
  if (!options) return mapWithoutParameters();

  const { includeNames, sorted, sex } = options;

  if (includeNames && !sorted && !sex) return mapWithAnimalNames();

  const zooMap = verifyData(includeNames, sorted, sex);

  return zooMap;
}

module.exports = getAnimalMap;
