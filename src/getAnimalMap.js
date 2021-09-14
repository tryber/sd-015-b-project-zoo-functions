const data = require('../data/zoo_data');

function getNames(animal, options) {
  const { sex } = options;
  const { sorted } = options;
  const nomes = data.species.find(({ name }) => (name === animal));
  const residentes = nomes.residents;
  const objeto = {
    [animal]: residentes.map((resident) => resident.name),
  };

  if (sex) {
    const residentesFromSex = residentes.filter((resident) => resident.sex === sex);
    objeto[animal] = residentesFromSex.map((resident) => resident.name);
  }
  if (sorted) {
    objeto[animal] = objeto[animal].sort();
  }
  return objeto;
}

function getAnimalMap(options) {
  const { species } = data;
  const directions = {
    NE: species.filter(({ location }) => location === 'NE').map(({ name }) => name),
    NW: species.filter(({ location }) => location === 'NW').map(({ name }) => name),
    SE: species.filter(({ location }) => location === 'SE').map(({ name }) => name),
    SW: species.filter(({ location }) => location === 'SW').map(({ name }) => name),
  };
  function insertNames() {
    directions.NE = directions.NE.map((animal) => (getNames(animal, options)));
    directions.NW = directions.NW.map((animal) => (getNames(animal, options)));
    directions.SE = directions.SE.map((animal) => (getNames(animal, options)));
    directions.SW = directions.SW.map((animal) => (getNames(animal, options)));
  }
  if (!options || !options.includeNames) return directions;
  if (options.includeNames) {
    insertNames();
    return directions;
  }
}

// console.table(getAnimalMap({ includeNames: true }));

module.exports = getAnimalMap;
