const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const obj = { child: 0,
    adult: 0,
    senior: 0,
  };
  entrants.forEach((element) => {
    if (element.age < 18) {
      obj.child += 1;
    } else if (element.age >= 18 && element.age < 50) {
      obj.adult += 1;
    } else {
      obj.senior += 1;
    }
  });
  return obj;
}

function calculateEntry(entrants) {
  console.log(entrants);
  if (Object.keys(entrants).length === 0 || !entrants) {
    return 0;
  }
  const childTotal = entrants.child * prices.child;
  const adultTotal = entrants.adult * prices.adult;
  const seniorTotal = entrants.senior * prices.senior;
  const total = childTotal + adultTotal + seniorTotal;
  console.log(total);
  return total;
}

const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

console.log(calculateEntry(entrants));
module.exports = { calculateEntry, countEntrants };
