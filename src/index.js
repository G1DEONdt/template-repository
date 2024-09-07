import { loadData, saveData } from './scripts/data';
import { addToFolder, getFolder, getSelectedProject } from './scripts/folder';
import { Project } from './scripts/project';
import { renderProjects, renderTodo } from './scripts/render';
import { Todo } from './scripts/todo';
import './style.css';

let projects = getFolder();

//Side Bar
const addProject = document.querySelector(".add-project");
const createProject = document.querySelector(".create");
const projectDefault = document.querySelector(".project-default");
const projectAdd = document.querySelector(".project-add");
const projectName = document.querySelector("#project-name");

// Form
const formContainer = document.querySelector(".form-container");
const form = document.querySelector(".form");
const addTodoButton = document.querySelector('.add-todo');
const cancelButton = document.querySelector('.cancel');
const submitButton = document.querySelector(".submit");



    
(function pageLoad () {
    loadData();
    if (getFolder().length <= 0) {
        const defaultProject = new Project("Home");
        addToFolder(defaultProject);
    }
    update();
})();




// Event Listeners 
addProject.addEventListener("click", () => {
    projectDefault.classList.add("hidden");
    projectAdd.classList.remove("hidden");
})


// Create Project 
createProject.addEventListener("click", () => {
    projectDefault.classList.remove("hidden");
    projectAdd.classList.add("hidden");

    const newProject = new Project(projectName.value);
    projectName.value = ""

    if (newProject.title === "") {
        newProject.setTitle("Unnamed Project");
    }

    addToFolder(newProject);
    update();
})

addTodoButton.addEventListener("click", () => {
    formContainer.classList.add("active");
})

cancelButton.addEventListener("click", (e) => {
    e.preventDefault();
    form.reset();
    formContainer.classList.remove("active");
})


// Create Todo

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    const title = document.querySelector("#title").value;
    const description = document.querySelector("#description").value;
    const date = document.querySelector('#date').value;
    const notes = document.querySelector('#notes').value;

    const todo = new Todo(title, description, date, notes);
    getSelectedProject().addTodo(todo);

    form.reset();
    formContainer.classList.remove("active");

    // renderTodo(getSelectedProject());
    update();
})

function update() {
    renderProjects();
    renderTodo(getSelectedProject());
    saveData(getFolder());
}