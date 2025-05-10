// Random Color Generator
const randomColor = () => {

  const hex = "0123456789ABCDEF"; // 16 digits pool, HEXADECIMAL
  let color = "#"

  for (let index = 0; index < 6; index++) {
    let randomValue = Math.floor(Math.random() * 16);
    color += hex[randomValue];
  }
  return color;
} 

let interval = null

const startChangingColor = () => {
  if (!interval){ // null is falsy value so if we do !interval that is == null
    interval = setInterval(() => {
     document.getElementById("color-box").style.backgroundColor = randomColor()
   }, 500);
  }
  else return
}

const stopChangingColor = () => {
  clearInterval(interval)
  interval = null;
}

document.getElementById("start-generate-color").addEventListener("click", startChangingColor);
document.getElementById("stop-generate-color").addEventListener("click", stopChangingColor);