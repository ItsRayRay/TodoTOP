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

document.querySelector(".submitBtn").addEventListener("click", createProject);

function createProject(e) {
  e.preventDefault();
  const title = document.querySelector(".textinput").value;
  const navbar = document.querySelector(".menu-links");

  const div = document.createElement("div");
  const li = document.createElement("li");
  const a = document.createElement("a");
  const i = document.createElement("i");
  const span = document.createElement("span");
  const trash = document.createElement("i");

  // store project title in local storage with date as unique key
  // add the ID to the trashbutton as a reference which to delete
  projectObj = {
    title: title,
    id: Date.now(),

    renderDom: function () {
      li.className = "nav-link";
      a.href = this.id;
      i.className = "bx bx-notepad icon";
      span.className = "text nav-text";
      span.textContent = this.title;
      trash.className = "bx bx-trash icon iconTrash";
      trash.id = this.id;

      navbar.appendChild(div);
      div.appendChild(li);
      li.appendChild(a);
      a.appendChild(i);
      a.appendChild(span);
      li.appendChild(trash);
      location.reload();
    },
  };

  projectObj.renderDom();

  localStorage.setItem(projectObj.id, JSON.stringify(projectObj));
  console.log(localStorage.getItem(projectObj.id));

  trash.addEventListener("click", removeFromLocalStorage);
  function removeFromLocalStorage(e) {
    e.preventDefault();
    localStorage.removeItem(e.target.id);
    li.remove();

    const homeSection = document.querySelector(".home")
    homeSection.textContent = "";

  }
}

//renders projects from local storage

function renderProjects() {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    const projectObj = JSON.parse(value);

    const navbar = document.querySelector(".menu-links");
    const div = document.createElement("div");
    const li = document.createElement("li");
    const a = document.createElement("a");
    const ie = document.createElement("i");
    const span = document.createElement("span");
    const trash = document.createElement("i");

    // render projects from local storage

    li.className = "nav-link";
    a.href = projectObj.id;
    ie.className = "bx bx-notepad icon";
    span.className = "text nav-text";
    span.textContent = projectObj.title;
    trash.className = "bx bx-trash icon iconTrash";
    trash.id = projectObj.id;

    navbar.appendChild(div);
    div.appendChild(li);
    li.appendChild(a);
    a.appendChild(ie);
    a.appendChild(span);
    li.appendChild(trash);

   


    const todoBtn = document.querySelector(`[href='${projectObj.id}']`);

    todoBtn.addEventListener("click", (e) => {
      e.preventDefault();
      console.log(projectObj.id);




      const homeSection = document.querySelector(".home")
      const toDo =  document.createElement("section");
      toDo.className = "todo";
      const toDoTitle = document.createElement("h2");
      toDoTitle.textContent = projectObj.title;
      const closeBtn = document.createElement("span");
      closeBtn.className = "close";
      closeBtn.textContent = `X`


        homeSection.textContent = "";
        homeSection.appendChild(toDo);
        toDo.appendChild(toDoTitle);
        toDo.appendChild(closeBtn);

        closeBtn.addEventListener("click", () => {
          homeSection.textContent = "";
        })



    })






      // remove from localstorare & DOM when trash button clicked
  trash.addEventListener("click", removeFromLocalStorage);
  function removeFromLocalStorage(e) {
    e.preventDefault();
    localStorage.removeItem(e.target.id);
    li.remove();
    const homeSection = document.querySelector(".home")
    homeSection.textContent = "";


  }


  


  }
  
}
renderProjects();

