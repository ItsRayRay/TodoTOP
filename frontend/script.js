// light dark mode

function startUp (){
// loop trough localstorage and get all items

for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);
  const projects = JSON.parse(localStorage.getItem(key)) || [];
  
 
  console.log(projects[0].title)

  const projectElement = document.createElement("div");
  projectElement.className = "project";
  projectElement.id = key;
  projectElement.innerHTML =`<li id="modalBtn" class="nav-link">
   <a onclick = "renderTodoList(${key})" class="projectTitle" href="#">
  <i class='bx bx-list-check icon'></i>
       <span id="${key}"  class="text nav-text">${projects[0].title}</span>
  </a>
   <i onclick="deleteProject(${key})" class='bx bx-trash icon trashicon' ></i>
  </li>
  `
  document.querySelector(".menu-links").appendChild(projectElement);
  }
  
  
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
    const projects = JSON.parse(localStorage.getItem(this.id)) || [];
    projects.push(this);
    localStorage.setItem(this.id, JSON.stringify(projects));

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

 function deleteProject(ref) {
  const projects = JSON.parse(localStorage.getItem(ref) || []);
  projects.forEach(project => {
    if (project.id == ref) {
      localStorage.removeItem(ref);
      location.reload();
    }
  }
  )

  console.log(projects)


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

document.querySelector(".projectTitle").addEventListener("click", function(e) {
  e.preventDefault();
  addTodoToLocalStorage();
}
)


function renderTodoList(ref) {


 const projects = JSON.parse(localStorage.getItem(ref)) || [];

  projects.forEach(project => {
    if (project.id == ref) {

    const homeSection = document.querySelector(".home");
    const toDo = document.createElement("section");
    toDo.id = ref
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
toDoTitle.className = "project.title"

closeBtn.innerHTML = `<p onclick = "closeTodo()"  >X</p>`;
toDoTitle.textContent = project.title;
todoInputFill.placeholder = "Add a task";
todoButton.textContent = "Add";
todoButton.innerHTML = `<p onclick = "addTodoToLocalStorage(${ref}) ">Add</p>`;
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
  }
  )
  renderTodoToDomElement(ref)
}




function closeTodo() {
  const homeSection = document.querySelector(".home");
  homeSection.textContent = "";
}


// 

function addTodoToLocalStorage(ref) {
  const Projects = JSON.parse(localStorage.getItem(ref)) || [];
  const todoInputValue = document.querySelector(".todo-input").value;
  const todo = new Todo(todoInputValue, Date.now(), ref, false);

    // push todoInputValue to localstorage match it with key of project id
  Projects.forEach(project => {
    if (project.id == ref) {
      project.todo.push(todo);
      localStorage.setItem(ref, JSON.stringify(Projects));
     window.location.reload();
     renderTodoToDomElement(ref);
    }
  } 
  )

}






  function renderTodoToDomElement(ref) {


    const todoLabel = document.createElement("label");
    const todoInput = document.createElement("input");
    const todoSpanFirst = document.createElement("span");
    const todoSpanSecond = document.createElement("span");
    const trash = document.createElement("i");
    trash.className = "bx bx-trash icon iconTrash";
    

    todoLabel.className = "tasks-list-item";
    todoInput.className = "tasks-list-cb";
    todoInput.type = "form-check-input";
    todoInput.name = "tasks";


    // create a new task
    todoSpanFirst.className = "tasks-list-mark";
    todoSpanSecond.className = "tasks-list-desc";


    const Projects = JSON.parse(localStorage.getItem(ref)) || [];
  
    for (let i = 0; i < Projects[0].todo.length; i++) {
      console.log(Projects[0].todo[i])
      const todo = document.createElement("div");
      todo.className = "todo-item";
      todo.id = Projects[0].todo[i];
      todo.innerHTML += `<label class="tasks-list-item">
      <input class="tasks-list-cb" type="checkbox" name="tasks">
      <span class="tasks-list-mark">
        <i onclick="setCompletedToTrue(${ref})"class="bx bx-check-circle icon iconCheck"></i>
      </span>
      <span class="tasks-list-desc">${Projects[0].todo[i].title}</span>
      <span class="tasks-list-action">
        <i  onclick="removeToDoFromLocalStorage(${ref} ,${Projects[0].todo[i].id})" class="bx bx-trash icon iconTrash"></i>
      </span>
    </label>`;
      document.querySelector(".todo-body").appendChild(todo);

      }

  }





  function removeToDoFromLocalStorage(ref, id) {
  
    const Projects = JSON.parse(localStorage.getItem(ref)) || [];
    console.log(id)

    
     if (confirm("Are you sure you want to delete this task?") || Projects[0].todo.length > 0) {
        Projects[0].todo.forEach(project => {
          if (project.id == id) {

            Projects[0].todo.splice(project, 1);
            console.log(Projects[0].todo)
            // logs array with all todos 
           // this is connected with the project 
           // need to remove the todo from the array

           

            localStorage.setItem(ref, JSON.stringify(Projects));
   
          }
        }
        )
      }
  

  }


