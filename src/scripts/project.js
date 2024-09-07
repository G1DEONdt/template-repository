export function Project (title) {
    this.title = title;

    this.project = [];

    this.setTitle = (title) => {
        this.title = title;
    }

    this.addTodo = (todo) => {
        this.project.push(todo);
    }

    this.removeTodo = (index) => {
        this.project.splice(index, 1);
    }
}