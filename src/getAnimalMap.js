const data = require('../data/zoo_data');

const { species } = data;

const getNames = (animal, options) => {
  const { sex, sorted } = options;
  const selectedAnimal = species.find(({ name }) => (name === animal));
  const { residents } = selectedAnimal;
  const animalObject = {
    [animal]: residents.map(({ name }) => name),
  };

  if (sex) {
    const residentesFromSex = residents.filter(({ sex: residentSex }) => residentSex === sex);
    animalObject[animal] = residentesFromSex.map(({ name }) => name);
  }
  if (sorted) {
    animalObject[animal] = animalObject[animal].sort();
  }
  return animalObject;
};

const getSpeciesByLocation = (local) => {
  const speciesByLocation = species.filter(({ location }) => location === local);
  return speciesByLocation.map(({ name }) => name);
};

const getAnimalMap = (options) => {
  const directions = {
    NE: getSpeciesByLocation('NE'),
    NW: getSpeciesByLocation('NW'),
    SE: getSpeciesByLocation('SE'),
    SW: getSpeciesByLocation('SW'),
  };

  if (!options || !options.includeNames) return directions;

  Object.keys(directions).forEach((key) => {
    directions[key] = directions[key].map((animal) => (getNames(animal, options)));
  });

  return directions;
};

module.exports = getAnimalMap;
