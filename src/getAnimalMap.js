const data = require('../data/zoo_data');

const { species } = data;
const onlyName = (animal) => animal.name;
const locations = ['NE', 'NW', 'SE', 'SW'];
function separateLocation(local) {
  return species.filter((animal) => animal.location === local);
}
const getAnimalsByLocation = (location, sex) => separateLocation(location).reduce(((acc, curr) => {
  const x = {};
  x[curr.name] = sex ? curr.residents.filter(
    (animalsGender) => animalsGender.sex === sex,
  ).map(onlyName) : curr.residents.map(onlyName);
  acc.push(x);
  return acc;
}), []);
const getAnimalsDefault = () =>
  locations.reduce((acc, location) => {
    acc[location] = separateLocation(location).map(onlyName);
    return acc;
  }, {});
const getAnimalsWithNames = (sorted, sex) =>
  locations.reduce((acc, location) => {
    acc[location] = getAnimalsByLocation(location, sex);
    if (sorted) {
      acc[location].forEach((z) => z[Object.keys(z)[0]].sort());
    }
    return acc;
  }, {});

function getAnimalMap(options) {
  if (options && options.includeNames) {
    return getAnimalsWithNames(options.sorted, options.sex);
  }
  return getAnimalsDefault();
}

module.exports = getAnimalMap;
