const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// adds residents names for each animal
function getResidents(animalName, locationAnimals, options) {
  let animalInfo = '';
  let residentsNames = '';
  // filters species using animalName
  animalInfo = species.filter((element) => element.name === animalName);
  let { residents } = animalInfo[0];
  // filters if sex is passed
  if (options.sex) {
    const { sex } = options;
    residents = residents.filter((resident) => resident.sex === sex);
  }
  // pushes spread list of residents names to value of item with key = animalName
  residentsNames = residents.map((resident) => resident.name);
  locationAnimals[animalName].push(...residentsNames);
  // sorts if sorted is passed
  if (options.sorted) {
    locationAnimals[animalName].sort();
  }
}

// loops through each animal in location
function loopThroughLocationAnimals(locationAnimals, options) {
  for (let i = 0; i < locationAnimals.length; i += 1) {
    const animalName = Object.keys(locationAnimals[i])[0];
    getResidents(animalName, locationAnimals[i], options);
  }
}

// loops through each location (NE, NW, SE, SW)
function loopThroughLocations(locations, options) {
  const locationsKeys = Object.keys(locations);
  for (let i = 0; i < locationsKeys.length; i += 1) {
    const locationAnimals = locations[locationsKeys[i]];
    loopThroughLocationAnimals(locationAnimals, options);
  }
}

// changes locations values to format [{ 'lions': [] }, { 'bears': [] }]
function mapToObj(locations, options) {
  data.species.forEach((specie) => locations[specie.location].push({ [specie.name]: [] }));
  loopThroughLocations(locations, options);
}

function dealWithOptions(options, locations) {
  const { includeNames } = options;
  if (includeNames) {
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
