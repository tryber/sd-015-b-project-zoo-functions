const data = require('../data/zoo_data');

const { species } = data;

// Solução utilizando reduce encontrada no repositório de Gabriel Rodrigues.

function getReport() {
  return species.reduce((acc, animal) => {
    const local = animal.location;
    if (!acc[local]) {
      acc[local] = [];
    }
    acc[local].push(animal.name);
    return acc;
  }, {});
}

function getNamesReport(options) {
  const { sorted, sex } = options;
  return species.reduce((acc, anml) => {
    if (!acc[anml.location]) {
      acc[anml.location] = [];
    }
    let list = [];
    if (sex) {
      list = anml.residents.filter((res) => res.sex === sex).map((res) => res.name);
    } else {
      list = anml.residents.map((res) => res.name);
    }
    if (sorted) {
      list.sort();
    }
    acc[anml.location].push({ [anml.name]: list });
    return acc;
  }, {});
}

function getAnimalMap(options = {}) {
  if (!options.includeNames) {
    return getReport();
  }
  return getNamesReport(options);
}

module.exports = getAnimalMap;
