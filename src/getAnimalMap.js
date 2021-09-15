const data = require('../data/zoo_data');

function noOptions(local) {
  return data.species.filter(({ location }) => local === location)
    .map(({ name }) => name);
}

function sortedNoSex(options, location) {
  const regionWithNamesSorted = [];
  const animalsInRegion = noOptions(location);

  if (options.sorted) {
    for (let index = 0; index < animalsInRegion.length; index += 1) {
      regionWithNamesSorted.push({ [animalsInRegion[index]]: data.species.filter((specie) =>
        specie.location === location && specie.name === animalsInRegion[index])
        .find(({ residents }) => residents).residents.map(({ name }) => name).sort() });
    }
    return regionWithNamesSorted;
  }
}

function optionIncludeName(options, location) {
  const regionWithNames = [];
  const animalsInRegion = noOptions(location);
  const sortedAnimals = sortedNoSex(options, location);

  for (let index = 0; index < animalsInRegion.length; index += 1) {
    regionWithNames.push({ [animalsInRegion[index]]: data.species.filter((specie) =>
      specie.location === location && specie.name === animalsInRegion[index])
      .find(({ residents }) => residents).residents.map(({ name }) => name) });
  }
  if (typeof sortedAnimals === 'undefined') {
    return regionWithNames;
  }
  return sortedAnimals;
}

function optionSexWithNamesSorted(sex, location) {
  const regionWithSexAndNamesSorted = [];
  const animalsInRegion = noOptions(location);

  for (let index = 0; index < animalsInRegion.length; index += 1) {
    regionWithSexAndNamesSorted.push({ [animalsInRegion[index]]: data.species.filter((specie) =>
      specie.location === location && specie.name === animalsInRegion[index])
      .find(({ residents }) => residents).residents.filter((resident) => resident.sex === sex)
      .map(({ name }) => name).sort() });
  }
  return regionWithSexAndNamesSorted;
}

function optionSexWithNames(sex, sorted, location) {
  const regionWithSexAndNames = [];
  const animalsInRegion = noOptions(location);

  for (let index = 0; index < animalsInRegion.length; index += 1) {
    regionWithSexAndNames.push({ [animalsInRegion[index]]: data.species.filter((specie) =>
      specie.location === location && specie.name === animalsInRegion[index])
      .find(({ residents }) => residents).residents.filter((resident) => resident.sex === sex)
      .map(({ name }) => name) });
  }
  if (sorted) {
    return optionSexWithNamesSorted(sex, location);
  }
  return regionWithSexAndNames;
}

function optionSex({ sex, includeNames, sorted }, location) {
  if (sex && includeNames) {
    return optionSexWithNames(sex, sorted, location);
  }
  return noOptions(location);
}

function checkOptions(options, location) {
  if (!options) {
    return noOptions(location);
  }
  if (options.sex) {
    return optionSex(options, location);
  }
  if (options.includeNames) {
    return optionIncludeName(options, location);
  }
}

function getAnimalMap(options) {
  const locations = { NE: [], NW: [], SE: [], SW: [] };
  data.species.forEach((specie) => {
    locations[specie.location] = checkOptions(options, specie.location);
  });
  return locations;
}

module.exports = getAnimalMap;
