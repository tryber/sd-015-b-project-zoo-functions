const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const individuals = entrants.reduce((thesePeoplesAre, thisPersonIs) => {
    const persons = thesePeoplesAre;
    if (thisPersonIs.age < 18) persons.child += 1;

    if (thisPersonIs.age >= 18 && thisPersonIs.age < 50) persons.adult += 1;

    if (thisPersonIs.age >= 50) persons.senior += 1;

    return thesePeoplesAre;
  }, { child: 0, adult: 0, senior: 0 });
  return individuals;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (entrants === undefined || entrants.length === 0 || Object.entries(entrants)
    .length === 0) return 0;
  const peoploWhoEntered = countEntrants(entrants);
  const { adult } = peoploWhoEntered;
  const { child } = peoploWhoEntered;
  const { senior } = peoploWhoEntered;

  const ticketsValue = data.prices;

  const adultTicketsValue = (ticketsValue.adult * adult);
  const childTicketsValue = (ticketsValue.child * child);
  const senioTicketsVAlue = (ticketsValue.senior * senior);
  const totalValue = adultTicketsValue + childTicketsValue + senioTicketsVAlue;
  return totalValue;
}

module.exports = { calculateEntry, countEntrants };
