const dates = ["2025-1-11", "2025-1-22", "2025-1-33"]; //here date = YY-DD-MM
const formattedDates = dates.map(format);

function format(element){
  const parts = element.split("-");
  return `${parts[1]} / ${parts[2]} / ${parts[0]}`; //here date = DD/MM/YY
}

console.log(formattedDates);
