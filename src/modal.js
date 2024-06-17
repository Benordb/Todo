// const [openBtn, closeBtn, createBtn] = document.querySelectorAll("button");
// const closebtn = document.querySelectorAll(".closeBtn");
// const [home, modal] = document.querySelectorAll("body>div");
// const form = document.querySelector("form");
// const [title, desc] = document.querySelectorAll("input");
// const cards = document.querySelector(".cards");
// let list = [];
// const cardTemplate = (ititle, idesc) => {
//   return `<div class="flex border-black rounded-lg px-4 justify-between">
//           <div>
//             <h1 class="text-slate-500">${ititle}</h1>
//             <p class="text-2xl">${idesc}</p>
//           </div>

//           <div class="flex gap-4">
//             <button class="del text-2xl flex items-center">
//               <ion-icon
//                 class="border border-black rounded-lg px-2 py-2 hover:bg-green-600 text-green-600 hover:text-white"
//                 name="pencil-outline"></ion-icon>
//             </button>
//             <button class="del text-2xl flex items-center">
//               <ion-icon
//                 class="border border-black rounded-lg px-2 py-2 hover:bg-red-600 hover:text-white text-red-600"
//                 name="trash-outline"></ion-icon>
//             </button>
//           </div>
//         </div>`;
// };

// openBtn.addEventListener("click", () => {
//   modal.classList.add("visible");
// });

// closebtn.addEventListener("click", () => {
//   modal.classList.remove("visible");
// });

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const ititle = title.value;
//   const idesc = desc.value;
//   const card = cardTemplate(ititle, idesc);

//   cards.innerHTML += card;
//   modal.classList.add("hidden");
//   modal.classList.remove("fixed");
//   const deleteBtn = document.querySelectorAll(".del");
//   const cardss = document.querySelectorAll(".cards>div");
//   deleteBtn.forEach((btn) => {
//     btn.addEventListener("click", (event) => {
//       event.target.parentNode.remove();
//       console.log(event.target.parentNode);
//       console.log(event.target);
//     });
//   });
// });
const [home, modal] = document.querySelectorAll("body>div");
const cardsInput = document.querySelectorAll(".cards"); //[toDoCards, inProgressCards, doneCards, blockedCards]
const form = document.querySelector("form");
const open = document.querySelector(".open-modal");
const close = document.querySelector(".close-modal");
const titleInput = document.querySelector("input");
const descInput = document.querySelector("textarea");

const [statusInput, priorityInput] = document.querySelectorAll("select");

open.addEventListener("click", () => {
  modal.classList.remove("invisible");
  modal.classList.add("visible");
});

close.addEventListener("click", () => {
  modal.classList.add("invisible");
  modal.classList.remove("visible");
});
let data = [];
let id = 0;

const cardTemplate = (title, desc, id, priority) => {
  return `<div
              class="card flex bg-white rounded-lg px-4 py-2 justify-between">
                          <div onclick="checkBox(${id})">bb</div>
              <div class="w-56">
                <h1 class="text-xl">${title}</h1>
                <p class="text-sm text-slate-500">${desc}</p>
                <p class="text-sm">${priority}</p>
              </div>

              <div class="flex flex-col gap-2 py-2">
                <ion-icon
                onclick="editCard(${id})"
                  class="text-green-500 hover:text-green-600 text-xl"
                  name="build-outline"></ion-icon>
                <ion-icon
                  onclick="deleteCard(${id})"
                  class="hover:text-red-800 text-red-600 text-xl"
                  name="trash-outline"></ion-icon>
              </div>
            </div>`;
};
const setData = (arr) => {
  data = arr;
  render();
};

const render = () => {
  cardsInput.forEach((cards) => {
    cards.innerHTML = "";
  });
  data.forEach((item) => {
    if (item.status == "toDo") {
      cardsInput[0].innerHTML += cardTemplate(
        item.title,
        item.desc,
        item.id,
        item.priority
      );
    } else if (item.status == "inProgress") {
      cardsInput[1].innerHTML += cardTemplate(
        item.title,
        item.desc,
        item.id,
        item.priority
      );
    } else if (item.status == "done") {
      cardsInput[2].innerHTML += cardTemplate(
        item.title,
        item.desc,
        item.id,
        item.priority
      );
    } else {
      cardsInput[3].innerHTML += cardTemplate(
        item.title,
        item.desc,
        item.id,
        item.priority
      );
    }
  });
};
// const swap = (a, b) => {
//   let temp = a;
//   a = b;
//   b = temp;
//   return a, b;
// };
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = titleInput.value;
  const desc = descInput.value;
  const priority = priorityInput.value;
  const status = statusInput.value;

  const checked = false;

  let priorityIndex = priorityInput.selectedIndex;

  const newData = [
    ...data,
    {
      id,
      title,
      desc,
      status,
      checked,
      priority,
      priorityIndex,
    },
  ];
  console.log(newData);
  const sortedPriData = sortPriority(newData);
  setData(sortedPriData);
  id++;
  modal.classList.add("invisible");
  modal.classList.remove("visible");
});
const sortPriority = (data) => {
  return data.sort((a, b) => a.priorityIndex - b.priorityIndex);
};

const deleteCard = (id) => {
  const newData = [...data].filter((item) => item.id !== id);
  setData(newData);
};
const editCard = (id) => {
  modal.classList.remove("invisible");
  modal.classList.add("visible");
  // const newData = [...data].filter((item) => item.id !== id);
  // setData(newData);
};
const checkBox = (id) => {
  const newData = [...data].filter((item) => {
    const statusS = item.status;
    console.log(statusS);
    if (item.id == id) {
      if (item.checked == false) {
        checked = true;
        item.status = "done";
        return true;
      } else {
        checked = false;
        item.status = statusS;
        return false;
      }
    }
    return true;
  });
  setData(newData);
};
render();
