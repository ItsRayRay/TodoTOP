// light dark mode

function startUp (){
  const projects = JSON.parse(localStorage.getItem("projects")) || [];
  projects.forEach(project => {
    const projectElement = document.createElement("div");
    projectElement.classList.add("project");
    projectElement.id = project.id;
    projectElement.innerHTML = `<li id="modalBtn" class="nav-link">
<a onclick = "renderTodoList()" class="projectTitle" href="#">
<i class='bx bx-list-check icon'></i>
    <span id="${project.title}"  class="text nav-text">${project.title}</span>
</a>
<i onclick="deleteProject()" class='bx bx-trash icon trashicon' ></i>
</li>
`
    document.querySelector(".menu-links").appendChild(projectElement);
  }
  );
}


startUp()


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
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////////////////////
// create project code


class Project {
  constructor(title, id,  ) {
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

class Todo {
  constructor(title, id, projectId, completed) {
    this.title = title;
    this.id = id;
    this.projectId = projectId;
    this.completed = completed;
  }
}

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

// check if project ID is same as the project ID in the todo list
function addTodoToLocalStorage() {
  const projectID = document.querySelector(".project")
  const Projects = JSON.parse(localStorage.getItem("projects")) || [];
  const todo = new Todo("itsatest", Date.now(), projectID.id);

  Projects.forEach(project => {
    if (project.id == todo.projectId) {
      project.todo.push(todo);
    }
  }
  );
  localStorage.setItem("projects", JSON.stringify(Projects));
}


addTodoToLocalStorage();


document.querySelector(".projectTitle").addEventListener("click", function(e) {
  e.preventDefault();
  addTodoToLocalStorage();
}
)


function renderTodoList() {

const homeSection = document.querySelector(".home");
const toDo = document.createElement("section");
const todoHeader = document.createElement("header");
const todoBody = document.createElement("div");
const todoFooter = document.createElement("footer");
const todoForm = document.createElement("form");
const todoInputFill = document.createElement("input");
const todoButton = document.createElement("button");
const toDoTitle = document.createElement("h2");
const closeBtn = document.createElement("span");

todoForm.className = "todo-form";
todoInputFill.className = "todo-input";
todoButton.className = "todo-button";
todoBody.className = "todo-body";
todoHeader.className = "todo-header";
todoFooter.className = "todo-footer";
toDo.className = "todo";
closeBtn.className = "close";
toDoTitle.className = "todo-title " 

closeBtn.innerHTML = `<p onclick = "closeTodo()"  >X</p>`;
toDoTitle.textContent = "test"
todoInputFill.placeholder = "Add a task";
todoButton.textContent = "Add";
todoButton.innerHTML = `<p onclick = "addTodoToProject() ">Add</p>`;
homeSection.textContent = "";

homeSection.appendChild(toDo);
toDo.appendChild(todoHeader);
toDo.appendChild(todoBody);
toDo.appendChild(todoFooter);
todoHeader.appendChild(toDoTitle);
todoHeader.appendChild(closeBtn);
todoFooter.appendChild(todoForm);
todoForm.appendChild(todoInputFill);
todoForm.appendChild(todoButton);
}

function closeTodo() {
  const homeSection = document.querySelector(".home");
  homeSection.textContent = "";
}


