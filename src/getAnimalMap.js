const { species } = require('../data/zoo_data');

const regions = ['NE', 'NW', 'SE', 'SW'];

function filterByRegions(region) {
  return species.filter((specie) => specie.location === region);
}

function outputDeafult() {
  const objectOfRegions = { NE: [], NW: [], SE: [], SW: [] };

  regions.forEach((region) => Object.assign(objectOfRegions[region],
    filterByRegions(region).map((resident) => resident.name)));

  return objectOfRegions;
}

function includeName() {
  const objectOfRegions = { NE: [], NW: [], SE: [], SW: [] };

  regions.forEach((region) => {
    filterByRegions(region).forEach((specie) => {
      let tempObj = {};
      const { name, residents } = specie;
      tempObj = { [name]: [] };
      residents.forEach((resident) => {
        const residentName = resident.name;
        tempObj[name].push(residentName);
      });
      objectOfRegions[region].push(tempObj);
    });
  });

  return objectOfRegions;
}

function includeNameSorted() {
  const objectOfRegions = { NE: [], NW: [], SE: [], SW: [] };

  regions.forEach((region) => {
    filterByRegions(region).forEach((specie) => {
      let tempObj = {};
      const { name, residents } = specie;
      tempObj = { [name]: [] };
      residents.forEach((resident) => {
        const residentName = resident.name;
        tempObj[name].push(residentName);
      });
      tempObj[name].sort();
      objectOfRegions[region].push(tempObj);
    });
  });

  return objectOfRegions;
}

function filterOfGender(gender) {
  const objectOfRegions = { NE: [], NW: [], SE: [], SW: [] };

  regions.forEach((region) => {
    filterByRegions(region).forEach((specie) => {
      let tempObj = {};
      const { name, residents } = specie;
      tempObj = { [name]: [] };
      residents.forEach((resident) => {
        if (resident.sex === gender) {
          const residentName = resident.name;
          tempObj[name].push(residentName);
        }
      });
      objectOfRegions[region].push(tempObj);
    });
  });

  return objectOfRegions;
}

function filterOfGenderSorted(gender) {
  const objectOfRegions = { NE: [], NW: [], SE: [], SW: [] };

  regions.forEach((region) => {
    filterByRegions(region).forEach((specie) => {
      let tempObj = {};
      const { name, residents } = specie;
      tempObj = { [name]: [] };
      residents.forEach((animal) => {
        if (animal.sex === gender) {
          const residentName = animal.name;
          tempObj[name].push(residentName);
        }
      });
      tempObj[name].sort();
      objectOfRegions[region].push(tempObj);
    });
  });
  return objectOfRegions;
}

function verifyInput(input, gender) {
  const objOfOptions = {
    truefalsefalse: includeName(),
    truetruefalse: includeNameSorted(),
    truefalsefemale: filterOfGender(gender),
    truefalsemale: filterOfGender(gender),
    truetruefemale: filterOfGenderSorted(gender),
    truetruemale: filterOfGenderSorted(gender),
    falsefalsefemale: outputDeafult(),
    falsetruefemale: outputDeafult(),
  };
  return objOfOptions[input];
}

function getAnimalMap(options) {
  if (!options) return outputDeafult();

  const { includeNames = false, sorted = false, sex = false } = options;

  const optionsOfOptions = `${includeNames}${sorted}${sex}`;

  return verifyInput(optionsOfOptions, sex);
}

module.exports = getAnimalMap;
