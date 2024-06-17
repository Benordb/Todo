const form = document.querySelector("form");
const titleInput = document.querySelector("input");
const descriptionInput = document.querySelector("textarea");

const openModalBtn = document.querySelector(".open-modal-btn");
const closeModalBtn = document.querySelector(".modal-close-btn");
const modal = document.querySelector(".modal-container");

let index = 0;

openModalBtn.addEventListener("click", () => {
  modal.classList.add("open");
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.remove("open");
});

const cardTemplate = (title, description, id) => {
  return `
    <div class="card">
      <div>
        <h1>${title}</h1>
        <p>${description}</p>
      </div>
      <div onclick="deleteItem(${id})">
        X
      </div>
    </div>
  `;
};

const cards = document.querySelector(".cards");

// State
let data = [];

// Set State
const setData = (arr) => {
  data = arr;

  render();
};

// Render
const render = () => {
  console.log(data);

  cards.innerHTML = "";

  data.forEach((item) => {
    cards.innerHTML += cardTemplate(item.title, item.description, item.id);
  });
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = titleInput.value;
  const description = descriptionInput.value;

  const newData = [
    ...data,
    {
      id: index,
      title: title,
      description: description,
    },
  ];

  index++;

  setData(newData);

  modal.classList.remove("open");
});

const deleteItem = (id) => {
  const newData = [...data].filter((item) => item.id !== id);
  setData(newData);
};

render();
