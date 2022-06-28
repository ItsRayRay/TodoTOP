
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
    toDoList: [],


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

    const homeSection = document.querySelector(".home");
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
      toDoTitle.className = "todo-title " + projectObj.id;
      
      

      closeBtn.textContent = `X`;
      toDoTitle.textContent = projectObj.title;
      todoInputFill.placeholder = "Add a task";
      todoButton.textContent = "Add";

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

      // add todo to local storage and on DOM
      todoButton.addEventListener("click", (e) => {
        e.preventDefault();

        const todoLabel = document.createElement("label");
        const todoInput = document.createElement("input");
        const todoSpanFirst = document.createElement("span");
        const todoSpanSecond = document.createElement("span");
        const trash = document.createElement("i");
        trash.className = "bx bx-trash icon iconTrash";
        

        todoLabel.className = "tasks-list-item";
        todoInput.className = "tasks-list-cb";
        todoInput.type = "checkbox";
        todoInput.name = "tasks";

        // create a new task
        todoSpanFirst.className = "tasks-list-mark";
        todoSpanSecond.className = "tasks-list-desc";

        //takes input from todo input field and adds it to the todo list



        todoSpanSecond.textContent = todoInputFill.value;

        todoBody.appendChild(todoLabel);
        todoLabel.appendChild(todoInput);
        todoLabel.appendChild(todoSpanFirst);
        todoLabel.appendChild(todoSpanSecond);
        todoLabel.appendChild(trash);

        const todoObj = {
          title: todoSpanSecond.textContent,
          id: Date.now(),
          completed: false,
        }
        trash.id = todoObj.id;
        

        todoInput.addEventListener("click", () => {
          console.log("checked ")
          todoObj.completed = true;
        })




        let todoJson = JSON.parse(localStorage.getItem(projectObj.id));

        todoJson.toDoList.push(todoObj);



        



        localStorage.setItem(projectObj.id, JSON.stringify(todoJson));

        todoJson = JSON.parse(localStorage.getItem(projectObj.id));
        
        console.log(todoJson);

         
        // remove from local storage and on DOM

        trash.addEventListener("click", (e) => {
          e.preventDefault();
          todoLabel.remove();

        
          
          const deleteItem = JSON.parse(localStorage.getItem(projectObj.id))
          console.log(deleteItem) 
          console.log (trash.id)

          deleteItem.toDoList.forEach((item, index) => {
            if (item.id == trash.id) {
              deleteItem.toDoList.splice(index, 1);
            }
          });
          

          localStorage.setItem(projectObj.id, JSON.stringify(deleteItem));
          




        })

        


   


        // add todo to local storage on existing json file inside of an array


   


      });

      closeBtn.addEventListener("click", () => {
        homeSection.textContent = "";
      });
    });

    // remove from localstorare & DOM when trash button clicked
    trash.addEventListener("click", removeFromLocalStorage);
    function removeFromLocalStorage(e) {
      e.preventDefault();
      localStorage.removeItem(e.target.id);
      li.remove();
      const homeSection = document.querySelector(".home");
      homeSection.textContent = "";
    }
  }
}
renderProjects();







function renderFromLocalStorage() {
  
  const keyLocalstorage = Object.keys(localStorage);


 

  keyLocalstorage.forEach((key) => {
    const projectObj = JSON.parse(localStorage.getItem(key));

    console.log(projectObj.toDoList);



    
  })
  

  

}


renderFromLocalStorage();