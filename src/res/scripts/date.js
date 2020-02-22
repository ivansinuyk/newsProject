const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export function date(string) {
  const parsedate = Date.parse(string);
  const time = new Date(parsedate);
  const now = new Date();
  const month = months[time.getMonth()];
  const day = time.getDate();
  const monthAndDay = day.toString() + ' ' + month + ' at';
  return `${
    now.getDate() === time.getDate() && now.getMonth() === time.getMonth()
      ? 'today at'
      : now - 1 === time.getDate() && now.getMonth() === time.getMonth()
      ? 'yesterday at'
      : monthAndDay
  } ${time.getHours()}:${time.getMinutes()}`;
}
