const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');
// entrada para testes - remover depois
function countEntrants(entrants) {
  // seu código aqui
  const visitors = { child: 0, adult: 0, senior: 0 };
  entrants.forEach(({ age } = entrants) => {
    if (age < 18) {
      visitors.child += 1;
    }
    if (age === 18 && age < 50) {
      visitors.adult += 1;
    }
    if (age >= 50) {
      visitors.senior += 1;
    }
  });
  return visitors;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (entrants !== undefined && Object.keys(entrants).length !== 0) {
    const visitors = countEntrants(entrants);
    const { child, adult, senior } = visitors;
    return (child * prices.child) + (adult * prices.adult) + (senior * prices.senior);
  }
  return 0;
}
console.log(calculateEntry({}));
module.exports = { calculateEntry, countEntrants };
