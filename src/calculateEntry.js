const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const resultEntrants = {};
  let countAdult = 0;
  let countChild = 0;
  let countSenior = 0;
  entrants.forEach((element) => {
    if (element.age < 18) countChild += 1;
    if (element.age > 17 && element.age < 50) countAdult += 1;
    if (element.age > 49) countSenior += 1;
  });
  resultEntrants.child = countChild;
  resultEntrants.adult = countAdult;
  resultEntrants.senior = countSenior;
  return resultEntrants;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const resultQtd = countEntrants(entrants);
  const resultValueTotal = (data.prices.child * resultQtd.child)
    + (data.prices.adult * resultQtd.adult) + (data.prices.senior * resultQtd.senior);
  return resultValueTotal;
}

module.exports = { calculateEntry, countEntrants };
