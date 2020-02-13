export function date(string) {
  const parsedate = Date.parse(string);
  const time = new Date(parsedate);
  const now = new Date().getDate();
  const month = monthToString(time.getMonth() + 1);
  const day = time.getDate();
  const monthAndDay = day.toString() + ' ' + month + ' at';
  return `${
    now === time.getDate()
      ? 'today at'
      : now - 1 === time.getDate()
      ? 'yearsturday at'
      : monthAndDay
  } ${time.getHours()}:${time.getMinutes()}`;
}

function monthToString(month) {
  switch (month) {
    case 1:
      return 'Jan';
    case 2:
      return 'Feb';
    case 3:
      return 'Mar';
    case 4:
      return 'Apr';
    case 5:
      return 'May';
    case 6:
      return 'June';
    case 7:
      return 'July';
    case 8:
      return 'Aug';
    case 9:
      return 'Sep';
    case 10:
      return 'Oct';
    case 11:
      return 'Nov';
    case 12:
      return 'Dec';
    default:
      return 'Unknown';
  }
}
