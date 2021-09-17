const data = require('../data/zoo_data');

const { species, hours } = data;

const getSearchByAnimalName = (search) => species.find((elemento) => elemento.name === search)
  .availability;

const getSomething = (search, allAnimalsObject, isSearchAnimal) => {
  if (isSearchAnimal) return getSearchByAnimalName(search);

  const objectBySearchDay = allAnimalsObject[search];

  return {
    [search]: objectBySearchDay,
  };
};

const getAllAnimalsName = () => species.map((elemento) => elemento.name);

const AllDaysObject = (Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday, Monday) => {
  const result = {
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
    Monday,
  };
  return result;
};

const formatToObject = (officeHour, exhibition) => {
  let days = exhibition;
  if (officeHour === 'CLOSED') days = 'The zoo will be closed!';

  return {
    officeHour,
    exhibition: days,
  };
};

const getTime = (day) => {
  if (day === 'Monday') return 'CLOSED';
  const scheduleTime = hours[day];
  return `Open from ${scheduleTime.open}am until ${scheduleTime.close}pm`;
};

const reduceToName = (anyDayAnimalArray) => anyDayAnimalArray.reduce((acc, elemento) => {
  let acumlated = acc;
  acumlated = acumlated.concat(elemento.name);
  return acumlated;
}, []);

const getAnyDayAnimal = (day) => species.filter((elemento) => elemento.availability.includes(day));

function getSchedule(scheduleTarget) {
  const Tuesday = formatToObject(getTime('Tuesday'), reduceToName(getAnyDayAnimal('Tuesday')));
  const Wednesday = formatToObject(getTime('Wednesday'),
    reduceToName(getAnyDayAnimal('Wednesday')));
  const Thursday = formatToObject(getTime('Thursday'), reduceToName(getAnyDayAnimal('Thursday')));
  const Friday = formatToObject(getTime('Friday'), reduceToName(getAnyDayAnimal('Friday')));
  const Saturday = formatToObject(getTime('Saturday'), reduceToName(getAnyDayAnimal('Saturday')));
  const Sunday = formatToObject(getTime('Sunday'), reduceToName(getAnyDayAnimal('Sunday')));
  const Monday = formatToObject(getTime('Monday'), reduceToName(getAnyDayAnimal('Monday')));
  const schedule = AllDaysObject(Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday, Monday);

  const days = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
  const allAnimalsName = getAllAnimalsName();

  if (days.includes(scheduleTarget) || allAnimalsName.includes(scheduleTarget)) {
    return getSomething(scheduleTarget, schedule, allAnimalsName.includes(scheduleTarget));
  }
  return schedule;
}

module.exports = getSchedule;
