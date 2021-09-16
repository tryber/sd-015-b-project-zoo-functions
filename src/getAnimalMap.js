const data = require('../data/zoo_data');

const { species } = data;

const getAnimalsFromNE = () => species.filter((elemento) => elemento.location === 'NE');
const getAnimalsFromNW = () => species.filter((elemento) => elemento.location === 'NW');
const getAnimalsFromSE = () => species.filter((elemento) => elemento.location === 'SE');
const getAnimalsFromSW = () => species.filter((elemento) => elemento.location === 'SW');

const reduceToName = (arrayOfAnimalFrom) => arrayOfAnimalFrom.reduce((acc, elemento) => 
 acc = acc.concat(elemento.name), []);

const createObj = (obj) => obj.map((elemento) => {
  const { residents } = elemento;
  const key = elemento['name'];

  const residentNames = residents.map((elemento) => elemento.name);

  return {[key]: residentNames}
});

const verifyOptions = (sorted, sex) => {
  let result;

  const params = (sorted || sex);
  if (params) {
    result = 10
  } else {
    result =  { NE: createObj(getAnimalsFromNE()), NW: createObj(getAnimalsFromNW()),
    SE: createObj(getAnimalsFromSE()), SW: createObj(getAnimalsFromSW())};
  }
  return result;
}

function getAnimalMap(options) {

  let result;

  result = { NE: reduceToName(getAnimalsFromNE()), NW: reduceToName(getAnimalsFromNW()),
    SE: reduceToName(getAnimalsFromSE()), SW: reduceToName(getAnimalsFromSW()) };

  if (options && options.includeNames) {
    const { sorted, sex } = options;
    result = verifyOptions(sorted, sex);
  }


  return result;
  //(a, b) => (a.name > b.name) ? 1 : -1); ordenar
}

console.log(getAnimalMap({includeNames: true}))

module.exports = getAnimalMap;
