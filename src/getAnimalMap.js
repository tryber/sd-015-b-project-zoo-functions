// const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// const getAnimalsByLocation = (location) => {
//   const animals = data.species.filter((animal) => animal.location === location.toUpperCase());
//   return animals.map((animal) => animal.name);
// };
// const getAnimalsbyName = (animalName) => {
//   const animal = species.find((specie) => specie.name === animalName);
//   const animalResidents = animal.residents.map((resident) => resident.name);
//   return ({ [animalName]: animalResidents });
// };
// const getAnimalsbyNameSorted = (animalName) => {
//   const animal = species.find((specie) => specie.name === animalName);
//   const animalResidents = animal.residents.map((resident) => resident.name);
//   return ({ [animalName]: animalResidents.sort() });
// }
// const getAllAnimalsLocation = () => {
//   const obj = {
//     NE: getAnimalsByLocation('ne'),
//     NW: getAnimalsByLocation('nw'),
//     SE: getAnimalsByLocation('se'),
//     SW: getAnimalsByLocation('sw'),
//   };

//   return obj;
// };
// const getAllAnimalsWithName = () => {
//   const allAnimalsObj = getAllAnimalsLocation();
//   const allAnimalsWithName = {
//     NE: allAnimalsObj.NE.map((animal) => getAnimalsbyName(animal)),
//     NW: allAnimalsObj.NW.map((animal) => getAnimalsbyName(animal)),
//     SE: allAnimalsObj.SE.map((animal) => getAnimalsbyName(animal)),
//     SW: allAnimalsObj.SW.map((animal) => getAnimalsbyName(animal)),
//   };
//   return allAnimalsWithName;
// };

// const getAnimalsSorted = (animalsWithLocation) => {
//   const allAnimalsObj = getAllAnimalsLocation();
//   const allAnimalsWithName = {
//     NE: allAnimalsObj.NE.map((animal) => getAnimalsbyNameSorted(animal)),
//     NW: allAnimalsObj.NW.map((animal) => getAnimalsbyNameSorted(animal)),
//     SE: allAnimalsObj.SE.map((animal) => getAnimalsbyNameSorted(animal)),
//     SW: allAnimalsObj.SW.map((animal) => getAnimalsbyNameSorted(animal)),
//   };
//   return allAnimalsWithName;
// };
// const isDefault = (obj) => {
//   const values = Object.values(obj);
//   return values.every((value) => value === false);
// }

function getAnimalMap(options = { includes: false, sorted: false }) {
//   // seu código aqui
//   let animalsObj = {};
//   if (isDefault(options) === true || options.includes === false) {
//     animalsObj = getAllAnimalsLocation();
//   } else {
//     if (options.includeNames === true) animalsObj = getAllAnimalsWithName();
//     if (options.sorted === true) animalsObj = getAnimalsSorted(getAllAnimalsWithName());
//   }
//   return animalsObj;
}
// console.log(getAnimalMap({ sorted: true }));
module.exports = getAnimalMap;
