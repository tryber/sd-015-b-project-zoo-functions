const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const newObject = {
    child: 0,
    adult: 0,
    senior: 0,
  };
  entrants.forEach((element) => {
    if (element.age < 18) {
      newObject.child += 1;
    } else if (element.age >= 18 && element.age < 50) {
      newObject.adult += 1;
    } else {
      newObject.senior += 1;
    }
  });
  return newObject;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const entryes = countEntrants(entrants);
  let valueEntry = 0;
  valueEntry += entryes.child * prices.child;
  valueEntry += entryes.adult * prices.adult;
  valueEntry += entryes.senior * prices.senior;
  return valueEntry;
}

module.exports = { calculateEntry, countEntrants };
console.log(calculateEntry({}));
