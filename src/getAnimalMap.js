const data = require('../data/zoo_data');

const { species } = data;

const withoutParameter = () => {
  const object = {};
  species.forEach((specie) => {
    if (!object[specie.location]) object[specie.location] = [];
    object[specie.location].push(specie.name);
  });
  return object;
};

const includeNameSorted = (sorted, sex) => {
  const object = {};
  species.forEach((specie) => {
    if (!object[specie.location]) object[specie.location] = [];
    let residents = [...specie.residents];
    if (sex) residents = residents.filter((specieName) => specieName.sex === sex);
    residents = residents.map((element) => element.name);
    if (sorted) residents.sort();
    object[specie.location].push({ [specie.name]: residents });
  });
  return object;
};

function getAnimalMap(options) {
  // seu código aqui
  if (!options) return withoutParameter();
  if (options.includeNames) return includeNameSorted(options.sorted, options.sex);
}

module.exports = getAnimalMap;
