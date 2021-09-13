const data = require('../data/zoo_data');

function generateResidentsListPerSpecies(options, oneSpecies) {
  let residentsList = oneSpecies.residents;
  if (Object.keys(options).includes('sex')) {
    residentsList = residentsList.filter((resident) => resident.sex === options.sex);
  }

  return residentsList;
}

function generateNamesListPerSpecies(options, oneSpecies) {
  const result = {};

  const residentsList = generateResidentsListPerSpecies(options, oneSpecies);

  const namesList = residentsList.map((resident) => resident.name);
  if (options.sorted === true) namesList.sort();

  result[oneSpecies.name] = namesList;

  return result;
}

function getOptions(options, oneSpecies) {
  if (!options || !options.includeNames) {
    return oneSpecies.name;
  }

  return generateNamesListPerSpecies(options, oneSpecies);
}

function getAnimalMap(options) {
  const { species } = data;
  const locations = { NE: [], NW: [], SE: [], SW: [] };

  Object.keys(locations).forEach((location) => {
    species.forEach((oneSpecies) => {
      if (oneSpecies.location === location) {
        locations[location].push(getOptions(options, oneSpecies));
      }
    });
  });

  return locations;
}

console.log(getAnimalMap({ includeNames: true, sex: 'female' }));

module.exports = getAnimalMap;
