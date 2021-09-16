const { hours, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSchedule(scheduleTarget) {
  const horario = hours;
  const especies = species.map((elemento) => elemento.name);
  const diasSemana = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  // .find((elemento, index) => elemento[index]);

  if (!scheduleTarget) {
    return diasSemana;
  }
}
console.log(getSchedule());

module.exports = getSchedule;
