const { species } = require('../data/zoo_data');

const generateResidentsListPerSpecies = ({ sex }, { residents }) => (
  sex ? residents.filter(({ sex: gender }) => gender === sex) : residents
);

function generateNamesListPerSpecies(options, oneSpecies) {
  const namesList = generateResidentsListPerSpecies(options, oneSpecies)
    .map(({ name }) => name);

  return { [oneSpecies.name]: options.sorted ? namesList.sort() : namesList };
}

const getOptions = (options, oneSpecies) => ((options && options.includeNames)
  ? generateNamesListPerSpecies(options, oneSpecies) : oneSpecies.name);

const getAnimalMap = (options) => species
  .reduce((locations, oneSpecies) => (
    { ...locations,
      [oneSpecies.location]: [...locations[oneSpecies.location], getOptions(options, oneSpecies)],
    }), { NE: [], NW: [], SE: [], SW: [] });

module.exports = getAnimalMap;
