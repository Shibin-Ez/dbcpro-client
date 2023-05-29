const dateFormat = (dateString) => {
  const date = new Date(dateString);

  const month = date.toLocaleDateString("en-US", { month: "short" }); // "Aug"
  const day = date.toLocaleDateString("en-US", { day: "numeric" }); // "12"
  const year = date.toLocaleDateString("en-US", { year: "numeric" }); // "2023"

  const orderDate = day + " " + month + " " + year; // "12 Aug 2023"

  const orderTime = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }); // "9:00 am"

  return [ orderDate, orderTime ];
};

export default dateFormat;
