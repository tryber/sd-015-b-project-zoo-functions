const data = require('../data/zoo_data');

function includeNamesWithoutFilter(filteredSpecies) {
  return filteredSpecies.map((specie) => {
    const specieResidents = specie.residents.reduce((acc, act) => {
      acc.push(act.name);
      return acc;
    }, []);
    return {
      [specie.name]: specieResidents,
    };
  });
}

function includeNamesSexFilter(filteredSpecies, sex) {
  return filteredSpecies.map((specie) => {
    const specieResidents = specie.residents.reduce((acc, act) => {
      if (act.sex === sex) {
        acc.push(act.name);
      }
      return acc;
    }, []);
    return {
      [specie.name]: specieResidents,
    };
  });
}

function sortNames(location) {
  return location.map((animal) => {
    const keys = Object.keys(animal);
    const specie = [keys][0];
    const sorted = animal[specie].sort();
    return {
      [specie]: sorted,
    };
  });
}

function includeNames(args, filteredSpecies) {
  let location;
  if (args.sex) {
    location = includeNamesSexFilter(filteredSpecies, args.sex);
  } else {
    location = includeNamesWithoutFilter(filteredSpecies);
  }
  return location;
}

function checkArgs(args, filteredSpecies) {
  let location;
  if (args.includeNames) {
    location = includeNames(args, filteredSpecies);
    if (args.sorted) {
      location = sortNames(location);
    }
  }
  return location;
}

function getAnimalMap( args = {}) {
  const locations = ['NE', 'NW', 'SE', 'SW'];
  const returnObj = {};
  locations.forEach((location) => {
    const filteredSpecies = data.species.filter((specie) => specie.location === location);
    const filteredSpeciesName = filteredSpecies.map((specie) => specie.name);
    returnObj[location] = filteredSpeciesName;
    if (args.includeNames) {
      returnObj[location] = checkArgs(args, filteredSpecies);
    }
  });
  return returnObj;
}

module.exports = getAnimalMap;
