const data = require('../data/zoo_data');

function countChilds(entrants) {
  const childs = entrants.filter((person) => person.age < 18);
  const childsQuantity = childs.length;
  return childsQuantity;
}
function countAdults(entrants) {
  const adult = entrants.filter((person) => person.age >= 18 && person.age < 50);
  const adultQuantity = adult.length;
  return adultQuantity;
}
function countSeniors(entrants) {
  const senior = entrants.filter((person) => person.age >= 50);
  const seniorQuantity = senior.length;
  return seniorQuantity;
}

function countEntrants(entrants) {
  let obj = 0;

  if (entrants && Array.isArray(entrants)) {
    obj = {
      child: countChilds(entrants),
      adult: countAdults(entrants),
      senior: countSeniors(entrants),
    };
  }
  return obj;
}
console.log(countEntrants({}));
function calculateEntry(entrants) {
  // seu código aqui
  const ageCountObj = countEntrants(entrants);
  let totalValue = 0;
  if (ageCountObj !== 0) {
    const [child, adult, senior] = Object.values(ageCountObj);
    totalValue = (child * 20.99) + (adult * 49.99) + (senior * 24.99);
  }
  return totalValue;
}

module.exports = { calculateEntry, countEntrants };
