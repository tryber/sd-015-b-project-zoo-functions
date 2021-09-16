const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// * Localization
const animalLocation = () => {
  const obj = {};
  species.forEach(({ location, name }) => {
    if (!obj[location]) { obj[location] = []; }
    obj[location].push(name);
  });
  return obj;
};

// * Animal sex
const animalSex = (sorted, sex) => {
  const obj = {};
  species.forEach(({ location, name, residents }) => {
    if (!obj[location]) { obj[location] = []; }

    let residentS = [...residents];
    if (sex) { residentS = residentS.filter((gender) => gender.sex === sex); }
    residentS = residentS.map((resident) => resident.name);

    if (sorted) residentS.sort();
    obj[location].push({ [name]: residentS });
  });
  return obj;
};

function getAnimalMap(options = {}) {
  const { includeNames, sorted, sex } = options;
  if (includeNames) return animalSex(sorted, sex);
  return animalLocation();
}

module.exports = getAnimalMap;
