import { addToFolder } from "./folder";
import { Project } from "./project";
import { Todo } from "./todo";

export function saveData (folder) {
    const stringified = JSON.stringify(folder);
    localStorage.setItem("data", stringified);
}

export function loadData () {
    const stringified = localStorage.getItem("data");
    
    try {
        const serialised = JSON.parse(stringified);
        for (let index in serialised) {
            const newProject = new Project(serialised[index].title);
            const array = serialised[index].project;
    
            for (let todo in array) {
                const newTodo = new Todo(
                    array[todo].name,
                    array[todo].description,
                    array[todo].dueDate,
                    array[todo].notes
                )
    
                newProject.addTodo(newTodo);
            }
    
            addToFolder(newProject);
        }
    } 
    catch (error) {
        return;
    }

    


}

