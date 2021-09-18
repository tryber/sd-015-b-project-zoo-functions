const { name } = require('faker/locale/pt_BR');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const C = entrants.filter((element) => (element.age < 18)).length;
  const A = entrants.filter((element) => (element.age >= 18 && element.age < 50)).length;
  const S = entrants.filter((element) => (element.age >= 50)).length;
  const result = { child: C, adult: A, senior: S };
  return result;
}

function callback(array) {
  if (!array || array.constructor === Object || Object.keys(array).length === 0) {
    return true;
  } return false;
}

function calculateEntry(entrants) {
  if (callback(entrants)) {
    return 0;
  }
  const price = [20.99, 49.99, 24.99];
  const numberP = countEntrants(entrants);
  const total = numberP.child * price[0] + numberP.adult * price[1] + numberP.senior * price[2];
  return total;
}

const entrants = [
  { name: name.findName(), age: 5 },
  { name: name.findName(), age: 5 },
  { name: name.findName(), age: 5 },
  { name: name.findName(), age: 18 },
  { name: name.findName(), age: 18 },
  { name: name.findName(), age: 50 },
];

console.log(data);
console.log(calculateEntry(entrants));

module.exports = { calculateEntry, countEntrants };
