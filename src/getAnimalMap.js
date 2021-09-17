const data = require('../data/zoo_data');

const especies = data.species;

function pegaArea(area) {
  const animais = [];
  especies.forEach((element) => {
    if (element.location === area) {
      animais.push(element.name);
    }
  });
  return {
    [area]: animais,
  };
}
console.log(pegaArea('NW'));

function getAnimalMap(options) {
  // seu código aqui
}

module.exports = getAnimalMap;
