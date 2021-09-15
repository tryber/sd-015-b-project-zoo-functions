const data = require('../data/zoo_data');

const { species, hours } = data;
const arrayHours = Object.entries(hours);

const withoutParameter = () => {
  const object = {};
  arrayHours.forEach((day) => {
    const { open, close } = day[1];
    Object.assign(object, { [day[0]]: { officeHour: `Open from ${open}am until ${close}pm`,
      exhibition: (species
        .filter(({ availability }) => availability.includes(day[0])).map(({ name }) => name)),
    } });
  });
  object.Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  return object;
};

const returnDay = (scheduleTarget) => ({ [scheduleTarget]: withoutParameter()[scheduleTarget] });

const getAnimal = (animal) => species.find((specie) => specie.name === animal).availability;

function getSchedule(scheduleTarget) {
  // seu código aqui
  if (Object.keys(withoutParameter()).includes(scheduleTarget)) return returnDay(scheduleTarget);
  if (species.map(({ name }) => name).includes(scheduleTarget)) return getAnimal(scheduleTarget);
  return withoutParameter();
}
console.log(getAnimal('penguins'));
module.exports = getSchedule;
