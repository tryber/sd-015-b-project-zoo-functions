const data = require('../data/zoo_data');

function addValues(entrants) {
  const obj = { adult: 0, child: 0, senior: 0 };
  entrants.forEach((entrant) => {
    if (entrant.age < 18) {
      obj.child += 1;
    } else if (entrant.age >= 18 && entrant.age < 50) {
      obj.adult += 1;
    } else {
      obj.senior += 1;
    }
  });
  return obj;
}

function countEntrants(entrants = {}) {
  if (Object.values(entrants).length > 0) {
    return addValues(entrants);
  }
  return 0;
}

function calculateEntry(entrants) {
  const count = countEntrants(entrants);
  if (count === 0) {
    return 0;
  }
  const adt = count.adult * data.prices.adult;
  const chd = count.child * data.prices.child;
  const snr = count.senior * data.prices.senior;

  return adt + chd + snr;
}
console.log(calculateEntry());

module.exports = { calculateEntry, countEntrants };
