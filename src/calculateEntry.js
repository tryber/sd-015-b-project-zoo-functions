const data = require('../data/zoo_data');

function countEntrants(entrants) {
  let childs = 0;
  let adults = 0;
  let seniors = 0;
  entrants.forEach((element) => {
    if (element.age < 18) {
      childs += 1;
    } else if (element.age >= 18 && element.age < 50) {
      adults += 1;
    } else if (element.age >= 50) {
      seniors += 1;
    }
  });
  return { child: childs, adult: adults, senior: seniors };
}

function calculateEntry(visitants = 0) {
  if (!visitants || visitants === 0 || Object.keys(visitants).length === 0) { return 0; }
  const visitantsList = countEntrants(visitants);
  const childsValor = visitantsList.child * 20.99;
  const adultValor = visitantsList.adult * 49.99;
  const seniorValor = visitantsList.senior * 24.99;
  return childsValor + adultValor + seniorValor;
}

module.exports = { calculateEntry, countEntrants };
