const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function allAnimalsMap() {
  const neAnimals = species.filter((animal) => animal.location === 'NE');
  const nwAnimals = species.filter((animal) => animal.location === 'NW');
  const seAnimals = species.filter((animal) => animal.location === 'SE');
  const swAnimals = species.filter((animal) => animal.location === 'SW');

  const allAnimals = {
    NE: neAnimals,
    NW: nwAnimals,
    SE: seAnimals,
    SW: swAnimals,
  };
  return allAnimals;
}

function allAnimalsMaps(allAnimals) {
  const animalsMaps = {
    NE: allAnimals.NE.map((animal) => animal.name),
    NW: allAnimals.NW.map((animal) => animal.name),
    SE: allAnimals.SE.map((animal) => animal.name),
    SW: allAnimals.SW.map((animal) => animal.name),
  };
  return animalsMaps;
}

function residentsOf(location, gender) {
  if (gender !== undefined) {
    const result = location.map((specie) => {
      const specieName = specie.name;
      const residents = specie.residents.filter((resident) => resident.sex === gender);
      const names = residents.map((resident) => resident.name);
      return { [specieName]: names };
    });
    return result;
  }

  const result = location.map((specie) => {
    const specieName = specie.name;
    const names = specie.residents.map((resident) => resident.name);
    return { [specieName]: names };
  });

  return result;
}

function animalsNameMap(animals, sex) {
  const speciesNE = residentsOf(animals.NE, sex);
  const speciesNW = residentsOf(animals.NW, sex);
  const speciesSE = residentsOf(animals.SE, sex);
  const speciesSW = residentsOf(animals.SW, sex);

  const map = {
    NE: speciesNE,
    NW: speciesNW,
    SE: speciesSE,
    SW: speciesSW,
  };
  return map;
}

function sortAnimalsNames(animals) {
  animals.NE.forEach((specie) => Object.values(specie)[0].sort());
  animals.NW.forEach((specie) => Object.values(specie)[0].sort());
  animals.SE.forEach((specie) => Object.values(specie)[0].sort());
  animals.SW.forEach((specie) => Object.values(specie)[0].sort());
}

function animalsByGender(sex, allAnimals) {
  return animalsNameMap(allAnimals, sex);
}

function ifIncludeNames(options, allAnimals) {
  if (options.sorted === true && options.sex !== undefined) {
    const animalsName = animalsByGender(options.sex, allAnimals);
    sortAnimalsNames(animalsName);
    return animalsName;
  }
  if (options.sorted === true) {
    const allAnimalsName = animalsNameMap(allAnimals);
    sortAnimalsNames(allAnimalsName);
    return allAnimalsName;
  }
  if (options.sex !== undefined) {
    return animalsByGender(options.sex, allAnimals);
  }
  return animalsNameMap(allAnimals);
}

function getAnimalMap(options) {
  const allAnimals = allAnimalsMap();
  if (options === undefined) {
    return allAnimalsMaps(allAnimals);
  }
  if (options.includeNames === true) {
    return ifIncludeNames(options, allAnimals);
  }
  return allAnimalsMaps(allAnimals);
}

module.exports = getAnimalMap;
