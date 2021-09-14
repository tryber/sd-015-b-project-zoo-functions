const data = require('../data/zoo_data');

function calculaEntrada(i) {
  let a = 0;
  let j = 0;
  let s = 0;
  const il = i;
  const ages = il.map((x) => x.age);
  ages.forEach((x) => {
    if (x < 18) { j += 1; }
    if (x >= 18 && x < 50) { a += 1; }
    if (x >= 50) { s += 1; }
  });
  return { child: j, adult: a, senior: s };
}
function countEntrants(i) {
  if (typeof (i) !== 'object') {
    return 0;
  } return calculaEntrada(i);
}

function calculateEntry(entrants) {
  if (entrants === undefined || entrants === 0) { return 0; }
  const pagantes = (entrants.length > 0) ? countEntrants(entrants) : 0;
  const kids = pagantes.child * 20.99;
  const adult = pagantes.adult * 49.99;
  const coroa = pagantes.senior * 24.99;
  if (pagantes === 0) {
    return 0;
  }
  return (kids + adult + coroa);
}

module.exports = { calculateEntry, countEntrants };
