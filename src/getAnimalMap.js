const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const NE = species.filter((specie) => specie.location === 'NE').map((specie) => specie.name);
const NW = species.filter((specie) => specie.location === 'NW').map((specie) => specie.name);
const SE = species.filter((specie) => specie.location === 'SE').map((specie) => specie.name);
const SW = species.filter((specie) => specie.location === 'SW').map((specie) => specie.name);

const fullNE = species.filter((sp) => sp.location === 'NE').reduce((acc, { name, residents }) => {
  const allResidents = residents.map((res) => res.name);
  const eachAnimal = { [name]: allResidents };
  acc.push(eachAnimal);
  return acc;
}, []);
const fullNW = species.filter((sp) => sp.location === 'NW').reduce((acc, { name, residents }) => {
  const allResidents = residents.map((res) => res.name);
  const eachAnimal = { [name]: allResidents };
  acc.push(eachAnimal);
  return acc;
}, []);
const fullSE = species.filter((sp) => sp.location === 'SE').reduce((acc, { name, residents }) => {
  const allResidents = residents.map((res) => res.name);
  const eachAnimal = { [name]: allResidents };
  acc.push(eachAnimal);
  return acc;
}, []);
const fullSW = species.filter((sp) => sp.location === 'SW').reduce((acc, { name, residents }) => {
  const allResidents = residents.map((res) => res.name);
  const eachAnimal = { [name]: allResidents };
  acc.push(eachAnimal);
  return acc;
}, []);

const sortedNE = species.filter((sp) => sp.location === 'NE').reduce((acc, { name, residents }) => {
  const allResidents = residents.map((res) => res.name);
  const eachAnimal = { [name]: allResidents.sort() };
  acc.push(eachAnimal);
  return acc;
}, []);
const sortedNW = species.filter((sp) => sp.location === 'NW').reduce((acc, { name, residents }) => {
  const allResidents = residents.map((res) => res.name);
  const eachAnimal = { [name]: allResidents.sort() };
  acc.push(eachAnimal);
  return acc;
}, []);
const sortedSE = species.filter((sp) => sp.location === 'SE').reduce((acc, { name, residents }) => {
  const allResidents = residents.map((res) => res.name);
  const eachAnimal = { [name]: allResidents.sort() };
  acc.push(eachAnimal);
  return acc;
}, []);
const sortedSW = species.filter((sp) => sp.location === 'SW').reduce((acc, { name, residents }) => {
  const allResidents = residents.map((res) => res.name);
  const eachAnimal = { [name]: allResidents.sort() };
  acc.push(eachAnimal);
  return acc;
}, []);

const maleNE = species.filter((sp) => sp.location === 'NE').reduce((acc, { name, residents }) => {
  const allResidents = residents.filter((male) => male.sex === 'male').map((res) => res.name);
  const eachAnimal = { [name]: allResidents };
  acc.push(eachAnimal);
  return acc;
}, []);
const maleNW = species.filter((sp) => sp.location === 'NW').reduce((acc, { name, residents }) => {
  const allResidents = residents.filter((male) => male.sex === 'male').map((res) => res.name);
  const eachAnimal = { [name]: allResidents };
  acc.push(eachAnimal);
  return acc;
}, []);
const maleSE = species.filter((sp) => sp.location === 'SE').reduce((acc, { name, residents }) => {
  const allResidents = residents.filter((male) => male.sex === 'male').map((res) => res.name);
  const eachAnimal = { [name]: allResidents };
  acc.push(eachAnimal);
  return acc;
}, []);
const maleSW = species.filter((sp) => sp.location === 'SW').reduce((acc, { name, residents }) => {
  const allResidents = residents.filter((male) => male.sex === 'male').map((res) => res.name);
  const eachAnimal = { [name]: allResidents };
  acc.push(eachAnimal);
  return acc;
}, []);

const femaleNE = species.filter((sp) => sp.location === 'NE').reduce((acc, { name, residents }) => {
  const allResidents = residents.filter((female) => female.sex === 'female').map((res) => res.name);
  const eachAnimal = { [name]: allResidents };
  acc.push(eachAnimal);
  return acc;
}, []);
const femaleNW = species.filter((sp) => sp.location === 'NW').reduce((acc, { name, residents }) => {
  const allResidents = residents.filter((female) => female.sex === 'female').map((res) => res.name);
  const eachAnimal = { [name]: allResidents };
  acc.push(eachAnimal);
  return acc;
}, []);
const femaleSE = species.filter((sp) => sp.location === 'SE').reduce((acc, { name, residents }) => {
  const allResidents = residents.filter((female) => female.sex === 'female').map((res) => res.name);
  const eachAnimal = { [name]: allResidents };
  acc.push(eachAnimal);
  return acc;
}, []);
const femaleSW = species.filter((sp) => sp.location === 'SW').reduce((acc, { name, residents }) => {
  const allResidents = residents.filter((female) => female.sex === 'female').map((res) => res.name);
  const eachAnimal = { [name]: allResidents };
  acc.push(eachAnimal);
  return acc;
}, []);
console.log('femaleSW É --->' , femaleSW);

function getAnimalMap(options) {
  const simpleMap = { NE, NW, SE, SW };
  if (!options) return simpleMap;
  const { includeNames, sorted, sex } = options;
  
  const namesMap = { NE: fullNE, NW: fullNW, SE: fullSE, SW: fullSW };
  if (includeNames === true && !sorted && !sex) return namesMap;
  
  const sortedMap = { NE: sortedNE, NW: sortedNW, SE: sortedSE, SW: sortedSW };
  if (sorted === true && includeNames === true && !sex) return sortedMap;
  
  console.log(sex)
  const maleMap = { NE: maleNE, NW: maleNW, SE: maleSE, SW: maleSW };
  if (sex === 'male' && !sorted) return maleMap;

  const femaleMap = { NE: femaleNE, NW: femaleNW, SE: femaleSE, SW: femaleSW };
  if (sex === 'female' !sorted) return femaleMap;

  const femaleMap = { NE: femaleNE, NW: femaleNW, SE: femaleSE, SW: femaleSW };
  if (sex === 'female') return femaleMap;

  const femaleMap = { NE: femaleNE, NW: femaleNW, SE: femaleSE, SW: femaleSW };
  if (sex === 'female') return femaleMap;



}

const options = { includeNames: true, sex: 'female' };
console.log(getAnimalMap(options));

module.exports = getAnimalMap;
