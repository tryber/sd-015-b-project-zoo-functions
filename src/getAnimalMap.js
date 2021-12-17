const { species } = require('../data/zoo_data');

const generateResidentsListPerSpecies = ({ sex }, { residents }) => (
  sex ? residents.filter(({ sex: gender }) => gender === sex) : residents
);

function includeAnimalsNames(options, oneSpecies) {
  const namesList = generateResidentsListPerSpecies(options, oneSpecies)
    .map(({ name }) => name);

  return { [oneSpecies.name]: options.sorted ? namesList.sort() : namesList };
}

const getSpecies = (options, oneSpecies) => ((options && options.includeNames)
  ? includeAnimalsNames(options, oneSpecies) : oneSpecies.name);

const getAnimalMap = (options) => species
  .reduce((locations, oneSpecies) => (
    { ...locations,
      [oneSpecies.location]: [...locations[oneSpecies.location], getSpecies(options, oneSpecies)],
    }), { NE: [], NW: [], SE: [], SW: [] });

module.exports = getAnimalMap;
