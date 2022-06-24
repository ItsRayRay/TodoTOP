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

const modal1 = document.getElementById("simpleModal1");
const modalBtn1 = document.getElementById("modalBtn1");
const closeBtn1 = document.querySelector(".closeBtn1");

modalBtn1.addEventListener("click", openModal1);
closeBtn1.addEventListener("click", closeModal1);

function openModal1() {
  modal1.style.display = "block";
}

function closeModal1() {
  modal1.style.display = "none";
}

addEventListener("submit", createProject);

function createProject(e) {
  e.preventDefault();
  const title = document.querySelector(".textinput").value;
  let navbar = document.querySelector( ".menu-links" )
  navbar.innerHTML += `     <li  class="nav-link">
  <a href="#">
      <i class='bx bx-bell icon'></i>
      <span class="text nav-text">${title}</span>
  </a>
</li>`;
}
