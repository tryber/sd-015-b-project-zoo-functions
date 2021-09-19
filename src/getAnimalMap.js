const data = require('../data/zoo_data');

const ne = data.species.filter((ele) => ele.location === 'NE');
const nw = data.species.filter((ele) => ele.location === 'NW');
const se = data.species.filter((ele) => ele.location === 'SE');
const sw = data.species.filter((ele) => ele.location === 'SW');
const allLocat = [ne, nw, se, sw];
const objResidentsNames = allLocat.map((re) => `${[re.residents][0]}`);
const arrayN = [];
const all = allLocat.map((el) => ({
  [el.name] : `${objResidentsNames}`,
}));
arrayN.push(all);
function animalsIndividualName() {
  return allLocat.map(() => ({
    NE: arrayN,
  }));
}
const arrayNames = animalsIndividualName();

function getAnimalMap(op = data.species) {
  const obj = allLocat.map(() => ({
    NE: ne.map((ele) => `${ele.name}`),
    NW: nw.map((ele) => `${ele.name}`),
    SE: se.map((ele) => `${ele.name}`),
    SW: sw.map((ele) => `${ele.name}`),
  })).shift();
  if (op.constructor === Object) {
    return arrayNames;
  }
  return obj;
}
module.exports = getAnimalMap;
console.log(getAnimalMap({}));
