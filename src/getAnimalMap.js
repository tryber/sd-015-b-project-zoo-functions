const data = require('../data/zoo_data');

const arrayRegions = [];
const optionsRegions = ['NE', 'NW', 'SE', 'SW'];
optionsRegions.forEach((region) => {
  arrayRegions.push(data.species.filter((animal) => animal.location === region));
});
const allRegions = {
  NE: [],
  NW: [],
  SE: [],
  SW: [],
};
function getAllRegions() {
  arrayRegions.forEach((region, index) =>
    region.forEach((elemnt) => allRegions[optionsRegions[index]].push(elemnt.name)));
  return allRegions;
}

function getAnimalsIncludeName(specie, region, sorted) {
  specie.forEach((animal) => {
    const { name, residents } = animal;
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
}

function getAnimalsIncludeNameSex(specie, region, sorted, sex) {
  specie.forEach((animal) => {
    const { name, residents } = animal;
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
}

function function1(includeNames, sorted) {
  if (includeNames) {
    optionsRegions.forEach((region, index) =>
      getAnimalsIncludeName(arrayRegions[index], region, sorted));
    return allRegions;
  }
  return getAllRegions();
}
function function2(includeNames, sorted, sex) {
  if (sex) {
    optionsRegions.forEach((region, index) =>
      getAnimalsIncludeNameSex(arrayRegions[index], region, sorted, sex));
    return allRegions;
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

console.log(getAnimalMap({ sex: 'female', sorted: true }));

module.exports = getAnimalMap;
