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

function residentsOf(location) {
  const result = location.map((specie) => {
    const specieName = specie.name;
    const names = specie.residents.map((resident) => resident.name);
    return { [specieName]: names };
  });

  return result;
}

function animalsNameMap(animals) {
  const speciesNE = residentsOf(animals.NE);
  const speciesNW = residentsOf(animals.NW);
  const speciesSE = residentsOf(animals.SE);
  const speciesSW = residentsOf(animals.SW);

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

function animalsByGender(sex) {

}

function getAnimalMap(options) {
  const allAnimals = allAnimalsMap();
  if (options === undefined) {
    return allAnimalsMaps(allAnimals);
  }
  if (options.includeNames === true) {
    if (options.sorted === true) {
      const allAnimalsName = animalsNameMap(allAnimals);
      sortAnimalsNames(allAnimalsName);
      return allAnimalsName;
    }
    if (options.sex !== undefined) {
      return animalsByGender(options.sex);
    }
    return animalsNameMap(allAnimals);
  }
}

module.exports = getAnimalMap;
