const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function mapingAll() {
  const obj = {
    NE: [],
    NW: [],
    SE: [],
    SW: []
  };
  const animals = species.map((elemento) => {
    const animal = elemento.name;
    const locAnimal = elemento.location;
    const keyObj = Object.keys(obj);
    for (let i = 0; i < keyObj.length; i++) {
      if (locAnimal === keyObj[i]) {
        obj[keyObj[i]].push(animal);
      }
    }
  });
  return obj;
}

function getAnimalMap(options) {
  if (options === undefined) {
    return mapingAll();
  }
}

module.exports = getAnimalMap;

console.log(getAnimalMap());