const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const clients = { adult: 0, child: 0, senior: 0 };
  entrants.forEach((person) => {
    if (person.age < 18) {
      clients.child += 1;
    }
    if (person.age >= 18 && person.age < 50) {
      clients.adult += 1;
    }
    if (person.age >= 50) {
      clients.senior += 1;
    }
  });
  return clients;
}

function calculateEntry(entrants) {
  let price = 0;
  if (entrants !== undefined && Object.entries(entrants).length !== 0) {
    const clientsList = countEntrants(entrants);
    price += (clientsList.adult * data.prices.adult);
    price += (clientsList.child * data.prices.child);
    price += (clientsList.senior * data.prices.senior);
  }
  return price;
}

module.exports = { calculateEntry, countEntrants };
