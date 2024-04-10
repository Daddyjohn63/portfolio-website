export function formatDateString(dateString) {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  // Parse the date string and create a new Date object
  const date = new Date(dateString);

  // Get the day, month, and year from the Date object
  const day = date.getDate();
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  // Function to get the ordinal suffix for the day
  function getOrdinalSuffix(day) {
    if (day > 3 && day < 21) return 'th';
    switch (day % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  }

  // Return the formatted date string
  return `${day}${getOrdinalSuffix(day)} ${month} ${year}`;
}
