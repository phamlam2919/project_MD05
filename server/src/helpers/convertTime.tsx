export function formatDateToYearMonthDay(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

// Example usage:
const created_at = new Date();
const formattedDate = formatDateToYearMonthDay(created_at);
console.log(formattedDate);
