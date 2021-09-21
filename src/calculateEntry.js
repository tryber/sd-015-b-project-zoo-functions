const { name } = require('faker');

function countEntrants(entrants) {
  const childs = entrants.filter((person) => (person.age < 18)).length;
  const adults = entrants.filter((person) => (person.age >= 18 && person.age < 50)).length;
  const seniors = entrants.filter((person) => (person.age >= 50)).length;
  const result = { child: childs, adult: adults, senior: seniors };
  return result;
}

function check(entrants) {
  if (!entrants || entrants.constructor === Object || Object.keys(entrants).length === 0) {
    return true;
  } return false;
}

function calculateEntry(entrants) {
  if (check(entrants)) {
    return 0;
  }
  const preço = [20.99, 49.99, 24.99];
  const totalEnt = countEntrants(entrants);
  const total = totalEnt.child * preço[0] + totalEnt.adult * preço[1] + totalEnt.senior * preço[2];
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

console.log(calculateEntry(entrants));

module.exports = { calculateEntry, countEntrants };
