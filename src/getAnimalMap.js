const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

const animalMap = {};
// retorna lista dos animais em sua localização caso não seja passado parametro;
const getAnimalsLocation = () => {
  const array = ['NE', 'NW', 'SE', 'SW'];
  for (let index = 0; index < array.length; index += 1) {
    const animals = species.filter((animal) => animal.location === array[index]);
    animalMap[array[index]] = animals.map((animal) => animal.name);
  }
};
// caso o parametro includeNames seja true
const includeNamesTrue = () => {
  const array = ['NE', 'NW', 'SE', 'SW'];
  for (let index = 0; index < array.length; index += 1) {
    const animals = species.filter((animal) => animal.location === array[index]);
    const animalsTest = animals.map((animal) => ({
      [animal.name]: animal.residents.map((resident) => resident.name),
    }));
    animalMap[array[index]] = animalsTest;
  }
};
// caso receba o parametro sex
// const returnAnimalsBySex = () => {
//   //  aqui
// };
// função principal
function getAnimalMap(options = {}) {
  // if (options.includeNames && !options.sex) {
  //   includeNamesTrue();
  //   return animalMap;
  // }
  // if (options.includeNames && options.sex) {
  // }
  // if (options.includeNames && options.sex && options.sorted) {
  //   if (Object.keys(options).length === 0) {
  //     getAnimalsLocation();
  //     return animalMap;
  //   }
  // }
  

// getAnimalMap({ includeNames: true, sex: 'female', sorted: true });
getAnimalMap({ includeNames: true });
module.exports = getAnimalMap;