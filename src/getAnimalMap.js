const data = require('../data/zoo_data');

const arrayRegions = [];
const optionsRegions = ['NE', 'NW', 'SE', 'SW'];
optionsRegions.forEach((region) => {
  arrayRegions.push(data.species.filter((animal) => animal.location === region));
});

function getAllRegions() {
  const allRegions = { NE: [], NW: [], SE: [], SW: [] };
  arrayRegions.forEach((region, index) =>
    region.forEach((elemnt) => {
      allRegions[optionsRegions[index]].push(elemnt.name);
    }));
  return allRegions;
}

function getAnimalsIncludeName(allRegions, specie, region, sorted) {
  specie.forEach(({ name, residents }) => {
    const array = [];
    if (sorted === true) {
      residents.forEach((resident) => {
        array.push(resident.name);
        array.sort();
      });
    } else {
      residents.forEach((resident) => array.push(resident.name));
    }
    allRegions[region].push({ [name]: array });
  });
  return allRegions;
}

function getAnimalsIncludeNameSex(allRegions, specie, region, sorted, sex) {
  specie.forEach(({ name, residents }) => {
    const array = [];
    residents.forEach((resident) => {
      if (resident.sex === sex) {
        array.push(resident.name);
      }
    });
    if (sorted === true) {
      array.sort();
      allRegions[region].push({ [name]: array });
    } else {
      allRegions[region].push({ [name]: array });
    }
  });
  return allRegions;
}

function function1(allRegions, includeNames, sorted) {
  if (includeNames) {
    optionsRegions.forEach((region, index) =>
      getAnimalsIncludeName(allRegions, arrayRegions[index], region, sorted));
    return allRegions;
  }
  return getAllRegions();
}
function function2(allRegions, includeNames, sorted, sex) {
  if (sex) {
    optionsRegions.forEach((region, index) =>
      getAnimalsIncludeNameSex(allRegions, arrayRegions[index], region, sorted, sex));
    return allRegions;
  }
  return function1(allRegions, includeNames, sorted);
}

function getAnimalMap(options = {}) {
  const { includeNames, sorted, sex } = options;
  const allRegions = { NE: [], NW: [], SE: [], SW: [] };
  if (includeNames) {
    return function2(allRegions, includeNames, sorted, sex);
  }
  return function1(allRegions, includeNames, sorted);
}

module.exports = getAnimalMap;
