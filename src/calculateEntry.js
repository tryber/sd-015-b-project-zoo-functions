const data = require('../data/zoo_data');

const countEntrants = (entrants = []) => {
  const entraceByAge = { child: 0, adult: 0, senior: 0 };

  entrants.forEach(({ age }) => {
    if (age >= 50) entraceByAge.senior += 1;
    else if (age >= 18) entraceByAge.adult += 1;
    else entraceByAge.child += 1;
  });

  return entraceByAge;
};

const calculateEntry = (entrants) => {
  if (typeof entrants === 'undefined' || Object.keys(entrants).length === 0) return 0;

  const { prices } = data;
  const entranceByAge = countEntrants(entrants);
  const childTotalEntry = entranceByAge.child * prices.child;
  const adultTotalEntry = entranceByAge.adult * prices.adult;
  const seniorTotalEntry = entranceByAge.senior * prices.senior;

  return childTotalEntry + adultTotalEntry + seniorTotalEntry;
};

module.exports = { calculateEntry, countEntrants };

console.log(calculateEntry({}));
