const data = require('../data/zoo_data');

function listSex(options, specie) {
  return specie.residents.reduce((arrayList, animal) => {
    if (options.sex && animal.sex === options.sex) arrayList.push(animal.name);
    if (!options.sex) arrayList.push(animal.name);
    return arrayList;
  }, []);
}

function getAnimalMap(options = { includeNames: false, sorted: false, sex: false }) {
  const animalMap = data.species.reduce((obj, specie) => {
    if (options.includeNames) {
      const animalSex = listSex(options, specie);
      if (options.sorted) {
        animalSex.sort();
      }
      obj[specie.location].push({ [specie.name]: animalSex });
    } else {
      obj[specie.location].push(specie.name);
    }
    return obj;
  }, { NE: [], NW: [], SE: [], SW: [] });
  return animalMap;
}

module.exports = getAnimalMap;
