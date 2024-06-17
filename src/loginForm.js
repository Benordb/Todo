const signin = document.querySelector(".signin");
const signup = document.querySelector(".signup");
const signi = document.querySelector(".signI");
const signu = document.querySelector(".signU");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const [hideI, hideU] = document.querySelectorAll(".hide");

let count = 0;
signin.addEventListener("click", () => {
  left.classList.add("translate-x-full");
  right.classList.add("-translate-x-1/2");
  signu.classList.add("-translate-x-1/2");
  signi.classList.remove("translate-x-1/2");
  const id = setInterval(() => {
    count++;
    if (count == 3) {
      hideI.classList.remove("-z-10");
      clearInterval(id);
      count = 0;
    }
  }, 90);
  hideU.classList.add("-z-10");
});

signup.addEventListener("click", () => {
  left.classList.remove("translate-x-full");
  right.classList.remove("-translate-x-1/2");
  signi.classList.add("translate-x-1/2");
  signu.classList.remove("-translate-x-1/2");
  const id = setInterval(() => {
    count++;
    if (count == 3) {
      hideU.classList.remove("-z-10");
      clearInterval(id);
      count = 0;
    }
  }, 90);
  hideI.classList.add("-z-10");
});

const input = document.querySelector(".inpu");

input.addEventListener("input", (event) => {
  console.log(event);
  console.log(input.value);
});
