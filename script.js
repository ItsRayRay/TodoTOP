const body = document.querySelector("body"),
  sidebar = body.querySelector("nav"),
  toggle = body.querySelector(".toggle"),
  searchBtn = body.querySelector(".search-box"),
  modeSwitch = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text");

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

searchBtn.addEventListener("click", () => {
  sidebar.classList.remove("close");
});

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    modeText.innerText = "Light mode";
  } else {
    modeText.innerText = "Dark mode";
  }
});

const modal = document.getElementById("simpleModal");
const modalBtn = document.getElementById("modalBtn");
const closeBtn = document.querySelector(".closeBtn");

window.addEventListener("click", outsideClick);
modalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}


document.querySelector(".submitBtn").addEventListener("click", createProject);

function createProject(e) {
  e.preventDefault();
  const title = document.querySelector(".textinput").value;
  let navbar = document.querySelector( ".menu-links" )

  const div = document.createElement("div");
  const li = document.createElement("li");
  const a = document.createElement("a");
  const i = document.createElement("i");
  const span = document.createElement("span");
  const trash = document.createElement("i");

  
  li.className = "nav-link";
  a.href = "#";
  i.className = "bx bx-notepad icon";
  span.className = "text nav-text";
 span.textContent = title;
 trash.className = "bx bx-trash icon iconTrash";

    navbar.appendChild(div);
    div.appendChild(li);
    li.appendChild(a);
    a.appendChild(i);
    a.appendChild(span);
    li.appendChild(trash);


}




