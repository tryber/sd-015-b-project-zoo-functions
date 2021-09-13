const data = require('../data/zoo_data');

const { hours } = data;

function getSchedule(dayName) {
  if (!dayName) {
    return Object.entries(hours).reduce((acc, [day, hourOpening]) => {
      if (day === 'Monday') {
        acc[day] = 'CLOSED';
        return acc;
      }
      acc[day] = `Open from ${hourOpening.open}am until ${hourOpening.close - 12}pm`;
      return acc;
    }, {});
  }
  const hourSelected = {};
  const [daySelected, hourOpening] = Object.entries(hours).find((day) => day[0] === dayName);
  if (dayName !== 'Monday') {
    hourSelected[daySelected] = `Open from ${hourOpening.open}am until ${hourOpening.close - 12}pm`;
    return hourSelected;
  }
  return { Monday: 'CLOSED' };
}

module.exports = getSchedule;
