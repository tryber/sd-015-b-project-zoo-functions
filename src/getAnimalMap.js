const data = require('../data/zoo_data');

function returnAll() {
  return data.species.reduce((acc, specie) => {
    if (!acc[specie.location]) {
      acc[specie.location] = [];
    }
    acc[specie.location].push(specie.name);
    return acc;
  }, {});
}

function returnNames(options) {
  const { sorted, sex } = options;
  return data.species.reduce((acc, specie) => {
    if (!acc[specie.location]) {
      acc[specie.location] = [];
    }
    let list = [];
    if (sex) {
      list = specie.residents.filter((resident) => resident.sex === sex)
        .map((resident) => resident.name);
    } else {
      list = specie.residents.map((resident) => resident.name);
    }
    if (sorted) {
      list.sort();
    }
    acc[specie.location].push({ [specie.name]: list });
    return acc;
  }, {});
}

function getAnimalMap(options = {}) {
  // seu código aqui

  if (!options.includeNames) {
    return returnAll();
  }
  return returnNames(options);
}

module.exports = getAnimalMap;
