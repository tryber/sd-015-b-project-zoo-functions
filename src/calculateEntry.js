const data = require('../data/zoo_data');

function verifyCountClients(entrants) {
  const result = {
    child: 0,
    adult: 0,
    senior: 0,
  };
  entrants.forEach((entrant) => {
    if (entrant.age < 18) {
      result.child += 1;
    } else if (entrant.age < 50) {
      result.adult += 1;
    } else {
      result.senior += 1;
    }
  });
  return result;
}

function countEntrants(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;

  return verifyCountClients(entrants);
}

function calculateEntry(entrants) {
  const clients = countEntrants(entrants);
  let total = 0;

  if (Object.keys(clients)[0] === 'child') {
    total += countEntrants(entrants).child * 20.99;
  }
  if (Object.keys(clients)[1] === 'adult') {
    total += countEntrants(entrants).adult * 49.99;
  }
  if (Object.keys(clients)[2] === 'senior') {
    total += countEntrants(entrants).senior * 24.99;
  }

  return total;
}

module.exports = { calculateEntry, countEntrants };
