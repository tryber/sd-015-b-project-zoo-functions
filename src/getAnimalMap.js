const data = require('../data/zoo_data');

const { species } = data;

const foundAnimalLocation = () => {
  const object = {};
  species.forEach(({ location, name }) => {
    if (!object[location]) { object[location] = []; }
    object[location].push(name);
  });
  return object;
};

const animalSex = (sorted, sex) => {
  const object = {};
  species.forEach(({ location, name, residents }) => {
    if (!object[location]) { object[location] = []; }
    let residentS = [...residents];
    if (sex) { residentS = residentS.filter((gender) => gender.sex === sex); }
    residentS = residentS.map((resident) => resident.name);
    if (sorted) residentS.sort();
    object[location].push({ [name]: residentS });
  });
  return object;
};

function getAnimalMap(options = {}) {
  const { includeNames, sorted, sex } = options;
  if (includeNames) return animalSex(sorted, sex);
  return foundAnimalLocation();
}
console.log(getAnimalMap({ sex: 'female', sorted: true }));
module.exports = getAnimalMap;
