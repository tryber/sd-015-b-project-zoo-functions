const data = require('../data/zoo_data');

const {species, hours} = data;

const closedMessade = `'CLOSED', 'exhibition': 'The zoo will be closed!'`;
const days = Object.keys(hours);
const allSpecies = species.map( (specie) => specie.name);
const messageOffice = `Open from ${hours[day].open}am until ${hours[day].close}pm`;

function argNull() {
  const dataObj = {};
  days.forEach( (day) => {
    const exibicaoDoDia = species
      .filter( (animal) => animal.availability)
      .includes( (day))
      .map( (mDay) => mDay.name);

  });
}

function getSchedule(scheduleTarget) {
  // seu código aqui
}

module.exports = getSchedule;