const data = require('../data/zoo_data');

const closedDayMessage = (day) => ({
  [day]: {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  },
});

function getScheduleDay(day) {
  const closedDay = 'Monday';
  const { open, close } = data.hours[day];

  if (day === closedDay) return closedDayMessage(day);

  return {
    [day]: {
      officeHour: `Open from ${open}am until ${close}pm`,
      exhibition: data.species.filter((animal) => animal.availability.includes(day))
        .map(({ name }) => name),
    },
  };
}

function getAllSchedule() {
  const allDays = Object.keys(data.hours);

  return allDays.reduce((days, day) => {
    const theDay = getScheduleDay(day);
    return {
      ...days,
      ...theDay,
    };
  }, {});
}
const getSchedule = (scheduleTarget) => {
  const getAnimalDays = data.species.find((animal) => animal.name === scheduleTarget);
  if (getAnimalDays) return getAnimalDays.availability;
  if (scheduleTarget in data.hours) return getScheduleDay(scheduleTarget);
  return getAllSchedule();
};

module.exports = getSchedule;
