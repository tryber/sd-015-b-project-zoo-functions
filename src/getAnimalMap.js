const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function wOutParam() {
  const obj = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
  species.forEach((e) => {
    if (e.location === 'NE') {
      obj.NE.push(e.name);
    } else if (e.location === 'NW') {
      obj.NW.push(e.name);
    } else if (e.location === 'SE') {
      obj.SE.push(e.name);
    } else {
      obj.SW.push(e.name);
    }
  });
  return obj;
}

function inNames() {
  
  const obj = wOutParam();
  console.log(obj.NE);
}

inNames();
function getAnimalMap(options) {
  if (!options) {
    return wOutParam();
  }
}

module.exports = getAnimalMap;
