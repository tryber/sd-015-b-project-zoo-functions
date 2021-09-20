const data = require('../data/zoo_data');
const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  let child = 0;
  let adult = 0;
  let senior = 0;
  entrants.forEach((element) => {
    if (element.age < 18) {
      child += 1;
    } else if (element.age >= 18 && element.age < 50) {
      adult += 1;
    } else {
      senior += 1;
    }
  });
  const objCount = { child, adult, senior };
  return objCount;
}

function childPrice(entrants) {
  let count = 0;
  entrants.forEach((element) => {
    if (element.age < 18) {
      count += 1;
    }
  });
  return count;
}

function adultPrice(entrants) {
  let count = 0;
  entrants.forEach((element) => {
    if (element.age >= 18 && element.age < 50) {
      count += 1;
    }
  });
  return count;
}

function seniorPrice(entrants) {
  let count = 0;
  entrants.forEach((element) => {
    if (element.age >= 50) {
      count += 1;
    }
  });
  return count;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (typeof entrants === 'undefined' || typeof entrants[0] === 'undefined') {
    return 0;
  }
  let pay = 0;
  pay += childPrice(entrants) * prices.child;
  pay += adultPrice(entrants) * prices.adult;
  pay += seniorPrice(entrants) * prices.senior;
  return pay;
}

module.exports = { calculateEntry, countEntrants };
