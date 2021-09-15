const data = require('../data/zoo_data');

const speciesPerRegion = () => {
  const animalMap = {};
  data.species.forEach((specie) => {
    if (!animalMap[specie.location]) {
      animalMap[specie.location] = [];
      animalMap[specie.location].push(specie.name);
    } else if (animalMap[specie.location]) {
      animalMap[specie.location].push(specie.name);
    }
  });
  return animalMap;
};

const mapIncludesNames = (sort, sex) => {
  const animalMap = {};
  data.species.forEach((specie) => {
    if (!animalMap[specie.location]) { animalMap[specie.location] = []; }
    let residents = [...specie.residents];
    if (sex) {
      residents = residents.filter((resident) => resident.sex === sex);
    }
    residents = residents.map((resident) => resident.name);
    if (sort === true) {
      residents.sort();
    }
    animalMap[specie.location].push({ [specie.name]: residents });
  });
  return animalMap;
};

function getAnimalMap(options = {}) {
  const { includeNames, sorted, sex } = options;

  if (includeNames === true) {
    return mapIncludesNames(sorted, sex);
  }
  return speciesPerRegion();
}

module.exports = getAnimalMap;

console.log(getAnimalMap({ includeNames: true, sex: 'female' }));
