const data = require('../data/zoo_data');

function daysNHours() {
  const obj = {};
  const days = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  days.forEach((e) => obj[e] = { officeHour: `Open from ${} until ${}`, });
  console.log(obj);
}

daysNHours();
function getSchedule(scheduleTarget) {
  // seu código aqui
}

module.exports = getSchedule;
