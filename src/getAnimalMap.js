const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalMap(options) {
  if (options === undefined) {
    return species.reduce((acc, atual) => {
      acc[atual.location] = species.filter((objeto) => objeto.location === atual.location)
        .map((nome) => nome.name);
      return acc;
    }, {});
  }
  return species.reduce((acc, atual) => {
    acc[atual.location] = species.filter((objeto) => objeto.location === atual.location)
      .map((nome) => nome.residents.find((nomes) => nomes.name));
    return acc;
  }, {});
}

console.log(getAnimalMap({ includeNames: true }));

// module.exports = getAnimalMap;
