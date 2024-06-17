const [signI, signU, bluecon] = document.querySelectorAll("body>div>div");
const blue = document.querySelector("body>div>div>div");
const [iBtn, uBtn, wBtn, hBtn] = document.querySelectorAll("button");
let ms = 0;
let id = null;
wBtn.addEventListener("click", () => {
  blue.classList.add("-translate-x-1/2");
  bluecon.classList.add("translate-x-full");
  signU.classList.add("-translate-x-1/2");
  signI.classList.remove("-z-10");
  const id = setInterval(() => {
    ms++;
    console.log(ms);
    if (ms == 1) {
      signI.classList.remove("translate-x-1/2");
      signU.classList.add("-z-10");
      clearInterval(id);
      ms = 0;
    }
  }, 500);
});
hBtn.addEventListener("click", () => {
  blue.classList.remove("-translate-x-1/2");
  bluecon.classList.remove("translate-x-full");
  signU.classList.remove("-z-10");
  signU.classList.remove("-translate-x-1/2");
  signI.classList.add("-z-10");

  const id = setInterval(() => {
    ms++;
    console.log(ms);
    if (ms == 1) {
      signI.classList.add("translate-x-1/2");

      clearInterval(id);
      ms = 0;
    }
  }, 500);
});
