const data = require('../data/zoo_data');

function getAnimalMap({ includeNames, sex, sorted } = {}) {
  const animalsByLocation = { NE: [], NW: [], SE: [], SW: [] };
  data.species.forEach((specie) => {
    if (includeNames) {
      const filterBySex = specie.residents.filter((a) => a.sex === sex || sex === undefined);
      const names = filterBySex.map((b) => b.name);
      const animalNames = { [specie.name]: names };
      if (sorted) {
        names.sort();
      }
      animalsByLocation[specie.location].push(animalNames);
    } else {
      animalsByLocation[specie.location].push(specie.name);
    }
  });
  return animalsByLocation;
}

console.log(getAnimalMap({ includeNames: true, sex: 'male' }));

module.exports = getAnimalMap;
