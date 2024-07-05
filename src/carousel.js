const [prevBtn, nextBtn] = document.querySelectorAll(".button");
const cards = document.querySelector(".cards");

const indicators = document.querySelectorAll(".indicator");

let index = 1;
let isTransitioning = false;

cards.style.transform = `translateX(-${(index * 100) / 6}%)`;

prevBtn.addEventListener("click", () => {
    if (isTransitioning) return;
    isTransitioning = true;

    index = (index - 1) % 6;

    cards.style.transition = "300ms";
    cards.style.transform = `translateX(-${(index * 100) / 6}%)`;
});

nextBtn.addEventListener("click", () => {
    if (isTransitioning) return;
    isTransitioning = true;

    index = (index + 1) % 6;
    cards.style.transition = "300ms";
    cards.style.transform = `translateX(-${(index * 100) / 6}%)`;
});

cards.addEventListener("transitionend", () => {
    if (index === 0) {
        cards.style.transition = "none";
        index = 4;
        cards.style.transform = `translateX(-${(index * 100) / 6}%)`;
    } else if (index === 5) {
        cards.style.transition = "none";
        index = 1;
        cards.style.transform = `translateX(-${(index * 100) / 6}%)`;
    }
    isTransitioning = false;
    console.log("hello")
});
