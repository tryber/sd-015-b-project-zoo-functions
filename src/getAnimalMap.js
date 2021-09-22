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
      if (!allRegions[optionsRegions[index]]) {
        allRegions[optionsRegions[index]] = [elemnt.name];
      }
      allRegions[optionsRegions[index]].push(elemnt.name);
    }));
  return allRegions;
}

function getAnimalsIncludeName(specie, region, sorted) {
  const allRegions = { NE: [], NW: [], SE: [], SW: [] };
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
  console.log(allRegions);
  return allRegions;
}

function getAnimalsIncludeNameSex(specie, region, sorted, sex) {
  const allRegions = { NE: [], NW: [], SE: [], SW: [] };
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

function function1(includeNames, sorted) {
  if (includeNames) {
    const retorno = optionsRegions.forEach((region, index) =>
      getAnimalsIncludeName(arrayRegions[index], region, sorted));
    return retorno;
  }
  return getAllRegions();
}
function function2(includeNames, sorted, sex) {
  if (sex) {
    const retorno = optionsRegions.forEach((region, index) =>
      getAnimalsIncludeNameSex(arrayRegions[index], region, sorted, sex));
    return retorno;
  }
  return function1(includeNames, sorted);
}

function getAnimalMap(options = {}) {
  const { includeNames, sorted, sex } = options;

  if (includeNames) {
    return function2(includeNames, sorted, sex);
  }
  return function1(includeNames, sorted);
}
//console.log(getAnimalsIncludeName(arrayRegions[0], 'NE', true));
console.log(getAnimalMap({ includeNames: true, sorted: true }));

module.exports = getAnimalMap;
