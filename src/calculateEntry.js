const data = require('../data/zoo_data');

const { prices } = data;

const children = (...ages) => ages.filter((elemento) => elemento < 18).length;

const adults = (...ages) => ages.filter((elemento) => elemento >= 18 && elemento < 50).length;

const seniors = (...ages) => ages.filter((elemento) => elemento >= 50).length;

function countEntrants(entrants) {
  const ages = entrants.reduce((acc, elemento) => {
    const value = acc;
    value.child += children(elemento.age);
    value.adult += adults(elemento.age);
    value.senior += seniors(elemento.age);
    return value;
  }, { child: 0, adult: 0, senior: 0 });

  return ages;
}

function calculateEntry(entrants) {
  if (entrants && Object.keys(entrants).length) {
    const idades = countEntrants(entrants);
    const { adult, senior, child } = prices;
    const { child: childQt, adult: adultQt, senior: seniorQt } = idades;
    const childValue = parseFloat((child * childQt).toPrecision(5));
    const adultValue = parseFloat((adult * adultQt).toPrecision(5));
    const seniorValue = parseFloat((senior * seniorQt).toPrecision(5));
    const result = parseFloat((childValue + adultValue + seniorValue).toPrecision(5));
    return result;
  }
  return 0;
}

module.exports = { calculateEntry, countEntrants };
