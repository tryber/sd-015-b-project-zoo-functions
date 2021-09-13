const data = require('../data/zoo_data');

const countEntrants = (entrants = []) => {
  const totalByAge = { child: 0, adult: 0, senior: 0 };

  entrants.forEach(({ age }) => {
    if (age >= 50) totalByAge.senior += 1;
    else if (age >= 18) totalByAge.adult += 1;
    else totalByAge.child += 1;
  });

  return totalByAge;
};

function calculateEntry(entrants) {
  // seu código aqui
}

module.exports = { calculateEntry, countEntrants };
