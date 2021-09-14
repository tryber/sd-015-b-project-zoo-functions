const data = require('../data/zoo_data');

function getNames(animal, options) {
  const { sex, sorted } = options;
  const selectedAnimal = data.species.find(({ name }) => (name === animal));
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
}

function getAnimalMap(options) {
  const directions = {
    NE: data.species.filter(({ location }) => location === 'NE').map(({ name }) => name),
    NW: data.species.filter(({ location }) => location === 'NW').map(({ name }) => name),
    SE: data.species.filter(({ location }) => location === 'SE').map(({ name }) => name),
    SW: data.species.filter(({ location }) => location === 'SW').map(({ name }) => name),
  };

  if (!options || !options.includeNames) return directions;

  directions.NE = directions.NE.map((animal) => (getNames(animal, options)));
  directions.NW = directions.NW.map((animal) => (getNames(animal, options)));
  directions.SE = directions.SE.map((animal) => (getNames(animal, options)));
  directions.SW = directions.SW.map((animal) => (getNames(animal, options)));

  return directions;
}

module.exports = getAnimalMap;
