const [start, pause, rest] = document.querySelectorAll(".box>:nth-child(2)>*");
const time = document.querySelector(".box>:first-child");

let count = 0;
let id = null;
let started = "end";

start.addEventListener("click", () => {
  start.style.backgroundColor = "red";
  if (started == "end" || started == "pause") {
    id = setInterval(() => {
      count += 0.1;
      console.log(count);
      time.textContent = count.toFixed(2);
    }, 100);
    console.log(!id);
    started = "start";
  }
});

pause.addEventListener("click", () => {
  if (started == "start") {
    clearInterval(id);
    started = "pause";
  }
});
rest.addEventListener("click", () => {
  if (started == "start" || started == "pause") {
    clearInterval(id);
    time.textContent = "0:00";
    count = 0;
    started = "end";
  }
});
console.log(start);
