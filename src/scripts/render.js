import { saveData } from "./data";
import { getFolder, getSelectedProject, getSelectedProjectIndex, removeFromFolder, selectedProject, setSelectedProject } from "./folder";

const projectContainer = document.querySelector(".project-container");
const todoContainer = document.querySelector('.todo-container');
const contentHeader = document.querySelector(".content-header");



export function renderProjects() {
    const folder = getFolder();
    resetContainer(projectContainer);
    contentHeader.innerText = folder[selectedProject].title;

    for (let item in folder) {
        // Create Elements
        const project = document.createElement("div");
        const selector = document.createElement("button");
        const title = document.createElement("h3");
        const deleteButton = document.createElement("button");

        // Add Classes
        project.classList.add("project");
        selector.classList.add("project-select");
        deleteButton.classList.add("add-project");

        // Fill Elements
        title.innerText = folder[item].title;
        deleteButton.innerText = "x";

        // Append Elements 
        project.appendChild(selector);
        project.appendChild(title);
        project.appendChild(deleteButton);

        projectContainer.appendChild(project);

        selector.addEventListener("click", () => {
            renderTodo(folder[item]);
            setSelectedProject(item);
            contentHeader.innerText = folder[item].title;
        })

        deleteButton.addEventListener("click", () => {
            if (getFolder().length > 1) {
                removeFromFolder(item);
                
                if (getSelectedProjectIndex() == item && item > 0){
                    setSelectedProject(getSelectedProjectIndex() - 1);
                } else {
                    setSelectedProject(0);
                }

                renderProjects();
                renderTodo(getSelectedProject());

            } else {
                alert("Must have at least one folder");
            }
            saveData(folder);
        })
    }
}

export function renderTodo(project) {
    resetContainer(todoContainer);
    
    for (let item in project.project) {
        // Create Elements
        const todo = document.createElement('div');
        const selector = document.createElement('button');
        const check = document.createElement('button');
        const content = document.createElement('div');
        const title = document.createElement('h3');
        const due = document.createElement('p');
        const deleteButton = document.createElement('button');
        const deleteButtonText = document.createElement('p');


        // Add classes
        todo.classList.add('todo');
        selector.classList.add('todo-selector');
        check.classList.add('check');
        content.classList.add('todo-content');
        deleteButton.classList.add('delete');

        // Fill elements
        title.innerText = project.project[item].name;
        due.innerText = project.project[item].dueDate;
        deleteButtonText.innerText = "x";

        // Append elements
        todo.appendChild(selector);
        todo.appendChild(check);
        todo.appendChild(content);
        content.appendChild(title);
        content.appendChild(due);
        todo.appendChild(deleteButton);
        deleteButton.appendChild(deleteButtonText);
        todoContainer.appendChild(todo);


        selector.addEventListener("click", () => {
            renderTodoItem(project, project.project[item], item);
            // console.log(project.project[item]);
        })
        
        // The illusion of choice
        check.addEventListener("click", () => {
            project.removeTodo(item);
            renderTodo(project);
            saveData(getFolder());
        })

        deleteButton.addEventListener("click", () => {
            project.removeTodo(item);
            renderTodo(project);
            saveData(getFolder());
        })
    }
}

function renderTodoItem (project, todo, index) {
    const todoExpanded = document.querySelector(".todo-expanded");
    const todoExpandedClose = document.querySelector(".todo-expanded-close");
    const title = document.querySelector(".window-title");
    const windowClose = document.querySelector(".window-close");
    const description = document.querySelector(".window-description-text");
    const due = document.querySelector(".window-due-text");
    const notes = document.querySelector(".window-notes-text");
    const edit = document.querySelector(".edit");
    const remove = document.querySelector(".remove");

    todoExpanded.classList.remove("hidden");

    // Fill Elements
    title.innerText = todo.name;
    description.innerText = todo.description;
    due.innerText = todo.dueDate;
    notes.innerText = todo.notes;

    // Button functions

    // I honestly have no idea why this doesn't work properly.....
    remove.addEventListener("click", () => {
        project.removeTodo(index);
        renderTodo(project);
        resetElements();
    })

    windowClose.addEventListener("click", () => {
        resetElements();
    })

    todoExpandedClose.addEventListener("click", () => {
        resetElements();
    })

    edit.addEventListener("click", () => {
        alert("I didn't implement this.");
        resetElements();
    })

    function resetElements() {
        title.innerText = "";
        description.innerText = "";
        due.innerText = "";
        notes.innerText = "";
        todoExpanded.classList.add("hidden");
    }
}

function resetContainer (container) {
    container.innerHTML = "";
}