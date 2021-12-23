import dateFnsTz from 'date-fns-tz';

const { zonedTimeToUtc, utcToZonedTime, format } = dateFnsTz;

const date = new Date();
const timeZone = 'Africa/Lagos';
const zonedDate = utcToZonedTime(date, timeZone);

const times = format(zonedDate, 'h:mm');
// console.log(times);
do {
  console.log(times);
} while (times !== '3:00');

// console.log(format(zonedDate, 'yyyy-MM-dd'));
// console.log(format(zonedDate, 'h:mm a'));
// console.log(format(zonedDate, 'MMMM'));
