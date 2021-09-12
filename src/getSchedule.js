const data = require("../data/zoo_data");

const getsDaysSchedule = (acc, day) => {
  acc[day] = acc[day] || {};
  const daySchedule = data.hours[day];
  const {open, close} = daySchedule;
  if (open && close){
    acc[day].officeHour = `Open from ${open}am until ${close}pm`;
    acc[day].exhibition = data.species
      .filter(({ availability }) => availability.includes(day))
      .map(({ name }) => name);
  } else {
    acc[day].officeHour = 'CLOSED';
    acc[day].exhibition = 'The zoo will be closed!';
  }
  return acc;
};


function getSchedule(scheduleTarget) {
  // seu código aqui
  const days = Object.keys(data.hours);
  const singleDay = days.includes(scheduleTarget);
  const isAnimal = data.species.some(({ name }) => name === scheduleTarget);
  const validParameter = scheduleTarget && !singleDay && !isAnimal;
  let schedule;

  if (singleDay || !scheduleTarget || validParameter) {
    const dates = singleDay ? [scheduleTarget] : days;
    schedule = dates.reduce(getsDaysSchedule, {}); 
  } else if (isAnimal) {
    schedule = data.species.find(({name}) => name === scheduleTarget).availability;
  }
  
  return schedule;
}

console.log(getSchedule('lions'));

module.exports = getSchedule;
