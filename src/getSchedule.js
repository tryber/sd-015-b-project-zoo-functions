const data = require('../data/zoo_data');

const {species, hours} = data;

const closedMessade = `'CLOSED', 'exhibition': 'The zoo will be closed!'`;
const days = Object.keys(hours);
const allSpecies = species.map( (specie) => specie.name);

function getSchedule(scheduleTarget) {
  // seu código aqui
}

module.exports = getSchedule;