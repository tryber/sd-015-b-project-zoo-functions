const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getResidents(animalName, locationAnimals, options) {
  let animalInfo = '';
  let residentsNames = '';
  animalInfo = species.filter((element) => element.name === animalName);
  let { residents } = animalInfo[0];
  if (options.sex) {
    const { sex } = options;
    residents = residents.filter((resident) => resident.sex === sex);
  }
  residentsNames = residents.map((resident) => resident.name);
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
  const { includeNames } = options;
  if (includeNames) {
    // console.log('includeNames');
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
  if (!options || (!options.includeNames && (options.sorted || options.sex))) {
    // makes object location: name
    data.species.forEach((specie) => locations[specie.location].push(specie.name));
  } else {
    dealWithOptions(options, locations);
  }
  return locations;
}

console.log(getAnimalMap({ sorted: true, sex: 'female' }));

module.exports = getAnimalMap;
