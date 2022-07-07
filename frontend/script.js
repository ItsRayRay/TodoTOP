// light dark mode

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

// modal JS

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

// create project code



class Project {
  constructor(title, id, ) {
    this.title = title;
    this.id = id;
    this.todo = [];
  }

  storeProject = function() {
    const projects = JSON.parse(localStorage.getItem("projects")) || [];
    projects.push(this);
    localStorage.setItem("projects", JSON.stringify(projects));

  }


}


window.addEventListener("load", () => {
  const projects = JSON.parse(localStorage.getItem("projects")) || [];
  projects.forEach(project => {
    const projectElement = document.createElement("div");
    projectElement.classList.add("project");
    projectElement.innerHTML = `
    <h2>${project.title}</h2>
    <button onclick="deleteProject()" class="delete-project" data-id="${project.id}">Delete</button>
    `;
    document.querySelector(".home").appendChild(projectElement);
  }
  );
}
);


function deleteProject() {
  const projects = JSON.parse(localStorage.getItem("projects")) || [];
  const id = event.target.dataset.id;
  const project = projects.find(project => project.id == id);
  const index = projects.indexOf(project);
  projects.splice(index, 1);
  localStorage.setItem("projects", JSON.stringify(projects));
  location.reload();
}





const projectTitleInput = document.querySelector(".textinput")
const projectSubmitBtn = document.querySelector(".submitBtn")





projectSubmitBtn.addEventListener("click", function(e) {
  e.preventDefault();
  const projectTitle = projectTitleInput.value;
  const project = new Project(projectTitle, Date.now());
  project.storeProject();
  location.reload();
}
)




