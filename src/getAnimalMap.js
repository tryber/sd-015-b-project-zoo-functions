const { species } = require('../data/zoo_data');

const generateRegions = () => {
  const regions = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };

  return regions;
};

const getAnimalsByRegion = () => {
  const regions = generateRegions();
  species.forEach(({ name, location }) => regions[location].push(name));

  return regions;
};

const handleSex = (sex, name, onlyNames) => {
  if (!sex) {
    return onlyNames;
  }
  const getAnimal = species.find((animal) => animal.name === name);
  const filterBySex = getAnimal.residents.filter((resident) => resident.sex === sex);
  const filterByName = filterBySex.map((animal) => animal.name);
  const newOnlyNames = onlyNames.filter((validName) => filterByName.includes(validName));

  return newOnlyNames;
};

const handleSorted = (sorted, onlyNames) => {
  if (sorted) {
    return onlyNames.sort();
  }
  return onlyNames;
};

const filterResidents = (names, sorted, sex) => {
  const animalGroup = [];
  names.forEach((name) => {
    const findResidents = species.find((animal) => animal.name === name).residents;
    const onlyNames = findResidents.map((resident) => resident.name);
    const group = {};
    const hasSex = handleSex(sex, name, onlyNames);
    const isSorted = handleSorted(sorted, hasSex);

    group[name] = isSorted;
    animalGroup.push(group);
  });

  return animalGroup;
};

const handleTypeMapReturn = (callBack, sorted, sex) => {
  const allRegions = generateRegions();
  const animals = getAnimalsByRegion();
  const entries = Object.entries(animals);

  const namesAndResidentes = entries.reduce((acc, [region, names]) => {
    const residents = callBack(names, sorted, sex);
    acc[region] = residents;

    return acc;
  }, allRegions);

  return namesAndResidentes;
};

function getAnimalMap(options) {
  // seu código aqui
  if (!options) {
    return getAnimalsByRegion();
  }

  const { includeNames, sorted, sex } = options;
  if (includeNames) {
    return handleTypeMapReturn(filterResidents, sorted, sex);
  }

  return getAnimalsByRegion();
}

module.exports = getAnimalMap;
