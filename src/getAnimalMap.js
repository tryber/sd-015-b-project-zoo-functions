const data = require('../data/zoo_data');

function generalMap() {
  // cria mapa geral das localidades
  const animals = data.species;
  const zooLocations = animals.reduce((locationMap, wheresIt) => {
    const allLocation = locationMap;

    const existCondition = allLocation[wheresIt.location] === undefined;
    if (existCondition) allLocation[wheresIt.location] = [];

    allLocation[wheresIt.location].push(wheresIt.name);
    return locationMap;
  }, {});
  return zooLocations;
}

function mapWithName() {
  const animals = data.species;
  const mapNamedAnimals = animals.reduce((locationMap, wheresItAndWho) => {
    const allLocation = locationMap;
    const existCondition = allLocation[wheresItAndWho.location] === undefined;
    if (existCondition) allLocation[wheresItAndWho.location] = [];
    const animalLocation = allLocation[wheresItAndWho.location];
    const specie = wheresItAndWho.name;
    const whoIs = wheresItAndWho.residents.reduce((namedAnimals, generalAnimalsInfo) => {
      namedAnimals.push(generalAnimalsInfo.name);
      return namedAnimals;
    }, []);
    const obj = {};
    obj[specie] = whoIs;
    animalLocation.push(obj);
    return locationMap;
  }, {});
  return mapNamedAnimals;
}

function mapWithNameOrdened() {
  const animals = data.species;
  const mapNamedAnimals = animals.reduce((locationMap, wheresItAndWho) => {
    const allLocation = locationMap;
    const existCondition = allLocation[wheresItAndWho.location] === undefined;
    if (existCondition) allLocation[wheresItAndWho.location] = [];
    const animalLocation = allLocation[wheresItAndWho.location];
    const specie = wheresItAndWho.name;
    const whoIs = wheresItAndWho.residents.reduce((namedAnimals, generalAnimalsInfo) => {
      namedAnimals.push(generalAnimalsInfo.name);
      return namedAnimals;
    }, []);
    const obj = {};
    obj[specie] = whoIs.sort();
    animalLocation.push(obj);
    return locationMap;
  }, {});
  return mapNamedAnimals;
}

function mapNamedAnimalsByGender(options) {
  const animals = data.species;
  const mapNamedAnimals = animals.reduce((locationMap, wheresItAndWho) => {
    const allLocation = locationMap;
    const existCondition = allLocation[wheresItAndWho.location] === undefined;
    if (existCondition) allLocation[wheresItAndWho.location] = [];
    const animalLocation = allLocation[wheresItAndWho.location];
    const specie = wheresItAndWho.name;
    const whoIs = wheresItAndWho.residents.reduce((namedAnimals, generalAnimalsInfo) => {
      if (generalAnimalsInfo.sex !== options.sex) return namedAnimals;
      namedAnimals.push(generalAnimalsInfo.name);
      return namedAnimals;
    }, []);
    const obj = {};
    obj[specie] = whoIs;
    animalLocation.push(obj);
    return locationMap;
  }, {});
  return mapNamedAnimals;
}

function mapNamedAnimalsByGenderOrdened(options) {
  const animals = data.species;
  const mapNamedAnimals = animals.reduce((locationMap, wheresItAndWho) => {
    const allLocation = locationMap;
    const existCondition = allLocation[wheresItAndWho.location] === undefined;
    if (existCondition) allLocation[wheresItAndWho.location] = [];
    const animalLocation = allLocation[wheresItAndWho.location];
    const specie = wheresItAndWho.name;
    const whoIsGender = wheresItAndWho.residents.reduce((namedAnimals, generalAnimalsInfo) => {
      if (generalAnimalsInfo.sex === options.sex) namedAnimals.push(generalAnimalsInfo.name);
      return namedAnimals;
    }, []);
    const obj = {};
    obj[specie] = whoIsGender.sort();
    animalLocation.push(obj);
    return locationMap;
  }, {});
  return mapNamedAnimals;
}

function testWithNamesOnly(options) {
  if (options.includeNames === true && options.sorted === undefined && options
    .sex === undefined) return mapWithName();
  return false;
}

function testWithSexOnly(options) {
  if (options.includeNames === true && options.sorted === undefined && options
    .sex !== undefined) return mapNamedAnimalsByGender(options);
  return testWithNamesOnly(options);
}

function testWithSortedOnly(options) {
  if (options.includeNames === true && options.sorted === true && options
    .sex === undefined) return mapWithNameOrdened();
  return testWithSexOnly(options);
}

function testAllOptions(options) {
  if (options.includeNames === true && options.sorted === true && options
    .sex !== undefined) return mapNamedAnimalsByGenderOrdened(options);
  return testWithSortedOnly(options);
}

function getAnimalMap(options) {
  // seu código aqui
  if (options === undefined || options.includeNames === undefined) return generalMap();
  return (testAllOptions(options));
}

module.exports = getAnimalMap;
