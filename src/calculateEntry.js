const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const returnObj = {
    child: 0,
    adult: 0,
    senior: 0,
  };
  entrants.forEach((person) => {
    if (person.age < 18) {
      returnObj.child += 1;
    } else if (person.age >= 18 && person.age < 50) {
      returnObj.adult += 1;
    } else {
      returnObj.senior += 1;
    }
  });
  return returnObj;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length < 1) {
    return 0;
  }
  let entryPayment = 0;
  const entrantsCountObj = countEntrants(entrants);
  const keys = Object.keys(entrantsCountObj);
  for (let index = 0; index < keys.length; index += 1) {
    entryPayment += entrantsCountObj[keys[index]] * data.prices[keys[index]];
  }
  return entryPayment;
}

module.exports = { calculateEntry, countEntrants };
