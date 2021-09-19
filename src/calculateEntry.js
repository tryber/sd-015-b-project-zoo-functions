const data = require('../data/zoo_data');

// function countEntrants(entrants) {
//   // seu código aqui
// }

// function calculateEntry(entrants) {
//   // seu código aqui
// }
function countEntrants(entrants) {
  let child = 0;
  let adult = 0;
  let senior = 0;
  entrants.map((item) => {
    if (item.age < 18) {
      child += 1;
    } else if (item.age >= 18 && item.age < 50) {
      adult += 1;
    } else if (item.age >= 50) {
      senior += 1;
    }
    return true;
  });
  return {
    child,
    adult,
    senior,
  };
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.values(entrants).length === 0) {
    return 0;
  }
  const publi = countEntrants(entrants);
  const child = publi.child * data.prices.child;
  const adult = publi.adult * data.prices.adult;
  const senior = publi.senior * data.prices.senior;
  const result = child + adult + senior;
  return result;
}

module.exports = { calculateEntry, countEntrants };
