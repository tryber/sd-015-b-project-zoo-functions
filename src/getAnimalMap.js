const data = require('../data/zoo_data');

function getNames(dataArray) {
  return dataArray.map((e) => e.name);
}
function alphabeticalOrder(animal) {
  return animal.sort((obj1, obj2) => {
    if (obj1 > obj2) return 1;
    if (obj1 < obj2) return -1;
    return 0;
  });
}

function includeNames(map) {
  data.species.forEach((animal) => {
    map[animal.location].push({ [animal.name]: getNames(animal.residents) });
  });
}

function includeNamesSorted(map) {
  data.species.forEach((animal) => {
    map[animal.location].push({ [animal.name]: alphabeticalOrder(getNames(animal.residents)) });
  });
}

function filterSex(animal, genero) {
  return animal.residents.filter((e) => e.sex === genero).map((e) => e.name);
}

function includeGenderNames(map, genero) {
  data.species.forEach((animal) => {
    map[animal.location].push({ [animal.name]: filterSex(animal, genero) });
  });
}

function includeGenderNamesSorted(map, genero) {
  data.species.forEach((animal) => {
    map[animal.location].push({ [animal.name]: alphabeticalOrder(filterSex(animal, genero)) });
  });
}

function getSpeciesNames(map) {
  data.species.forEach((animal) => {
    map[animal.location].push(animal.name);
  });
}

function verify(options, map) {
  if (options.sorted === undefined && options.sex === undefined) {
    includeNames(map);
  }
}
function verify2(options, map) {
  if (options.sorted && options.includeNames && !options.sex) {
    includeNamesSorted(map);
  }
}
function verify3(options, map) {
  if (!options.includeNames && options.sex === 'female' && !options.sorted) {
    getSpeciesNames(map);
  }
}

function verify4(options, map) {
  if (!options.includeNames && options.sex === 'female' && options.sorted) {
    getSpeciesNames(map);
  }
}

function verify5(options, map) {
  if (options.includeNames && options.sex && !options.sorted) {
    includeGenderNames(map, options.sex);
  }
}
function verify6(options, map) {
  if (options.includeNames && options.sex && options.sorted) {
    includeGenderNamesSorted(map, options.sex);
  }
}

function getAnimalMap(options) {
  const map = { NE: [], NW: [], SE: [], SW: [] };
  if (options) {
    verify(options, map);
    verify2(options, map);
    verify3(options, map);
    verify4(options, map);
    verify5(options, map);
    verify6(options, map);
  } else {
    getSpeciesNames(map);
  }
  return map;
}

module.exports = getAnimalMap;
