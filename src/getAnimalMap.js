const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const defaultBehaviour = () => {
  const animalsByLocation = { NE: [], NW: [], SE: [], SW: [] };

  const arrOfLocations = Object.keys(animalsByLocation);
  arrOfLocations.forEach((loc) => {
    const filtredAnimals = (species.filter((animal) => animal.location === loc));
    animalsByLocation[loc] = filtredAnimals.map((name) => name.name);
  });

  return animalsByLocation;
};

const includeNamesTrue = () => {
  const animalsByLocation = { NE: [], NW: [], SE: [], SW: [] };

  const arrOfLocations = Object.keys(animalsByLocation);
  arrOfLocations.forEach((loc) => {
    const filtredAnimals = (species.filter((animal) => animal.location === loc));
    animalsByLocation[loc] = filtredAnimals.map((animalNames) => {
      const resultObj = {};
      resultObj[animalNames.name] = animalNames.residents.map((names) => names.name);
      return resultObj;
    });
  });

  console.log(animalsByLocation);
  return animalsByLocation;
};

const includeNamesTrueSorted = () => {
  const animalsByLocation = { NE: [], NW: [], SE: [], SW: [] };

  const arrOfLocations = Object.keys(animalsByLocation);
  arrOfLocations.forEach((loc) => {
    const filtredAnimals = (species.filter((animal) => animal.location === loc));
    animalsByLocation[loc] = filtredAnimals.map((animalNames) => {
      const resultObj = {};
      resultObj[animalNames.name] = animalNames.residents.map((names) => names.name).sort();
      return resultObj;
    });
  });

  return animalsByLocation;
};

const nameBySex = (sex) => {
  const animalsByLocation = { NE: [], NW: [], SE: [], SW: [] };

  const arrOfLocations = Object.keys(animalsByLocation);
  arrOfLocations.forEach((loc) => {
    const filtredAnimals = (species.filter((animal) => animal.location === loc));
    animalsByLocation[loc] = filtredAnimals.map((animalNames) => {
      const resultObj = {};
      const filteredBySex = animalNames.residents.filter((names) => names.sex === sex);
      const filteredBySexOfName = filteredBySex.map((name) => name.name);
      resultObj[animalNames.name] = filteredBySexOfName;

      return resultObj;
    });
  });

  return animalsByLocation;
};

const nameBySexSorted = (sex) => {
  const animalsByLocation = { NE: [], NW: [], SE: [], SW: [] };

  const arrOfLocations = Object.keys(animalsByLocation);
  arrOfLocations.forEach((loc) => {
    const filtredAnimals = (species.filter((animal) => animal.location === loc));
    animalsByLocation[loc] = filtredAnimals.map((animalNames) => {
      const resultObj = {};
      const filteredBySex = animalNames.residents.filter((names) => names.sex === sex);
      const filteredBySexAndSorted = filteredBySex.map((name) => name.name).sort();
      resultObj[animalNames.name] = filteredBySexAndSorted;

      return resultObj;
    });
  });

  return animalsByLocation;
};

const callOfFunctions = (optionSet, sex) => {
  const probalitys = {
    trueundefinedundefined: includeNamesTrue(),
    truetrueundefined: includeNamesTrueSorted(),
    trueundefinedmale: nameBySex(sex),
    trueundefinedfemale: nameBySex(sex),
    truetruemale: nameBySexSorted(sex),
    truetruefemale: nameBySexSorted(sex),
    falsefalsefemale: includeNamesTrue(),
    falsetruefemale: includeNamesTrue(),
  }
  
  const returnObject = probalitys[optionSet];

  return returnObject;
}

function getAnimalMap(options) {
  // seu código aqui
  if (options === undefined) {
    return defaultBehaviour();
  }

  const {includeNames, sorted, sex} = options;
  const stringfyOptions = `${includeNames}${sorted}${sex}`;
  
  callOfFunctions(stringfyOptions, options.sex);
}

const option = { includeNames: true };
console.log(getAnimalMap(option));

module.exports = getAnimalMap;
