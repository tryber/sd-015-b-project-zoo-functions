const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getResidents(animalName, locationAnimals, options) {
  const animalInfo = species.filter((element) => element.name === animalName);
  const { residents } = animalInfo[0];
  const residentsNames = residents.map((resident) => resident.name);
  locationAnimals[animalName].push(...residentsNames);
  if (options.sorted) {
    locationAnimals[animalName].sort();
  }
  return residentsNames;
}

function loopThroughLocationAnimals(locationAnimals, locations, options) {
  for (let i = 0; i < locationAnimals.length; i += 1) {
    const animalName = Object.keys(locationAnimals[i])[0];
    getResidents(animalName, locationAnimals[i], options);
  }
}

function loopThroughLocations(locations, options) {
  const locationsKeys = Object.keys(locations);
  for (let i = 0; i < locationsKeys.length; i += 1) {
    const locationAnimals = locations[locationsKeys[i]];
    loopThroughLocationAnimals(locationAnimals, locations, options);
  }
}

function mapToObj(locations, options) {
  data.species.forEach((specie) => locations[specie.location].push({ [specie.name]: [] }));
  loopThroughLocations(locations, options);
}

function dealWithOptions(options, locations) {
  const { includeNames, sorted, sex } = options;
  if (includeNames) {
    console.log('includeNames');
    mapToObj(locations, options);
  }
}

function getAnimalMap(options) {
  const locations = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
  if (options) {
    dealWithOptions(options, locations);
  }
  if (!options) {
    // makes object location: name
    data.species.forEach((specie) => locations[specie.location].push(specie.name));
  }
  return locations;
}

// console.log(getAnimalMap({ includeNames: true, sorted: true }).NE[0]);

module.exports = getAnimalMap;
