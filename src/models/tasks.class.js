import { LEVELS } from "./levels.enun";

export class Task {
    id = "";
    title = "";
    description = "";
    completed = false;
    level = LEVELS.NORMAL;

    //Constructor
    constructor(id, title, description, completed, level) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.completed = completed;
        this.level = level;
    }
}

export class Tasks {
    constructor() {
        this.tasks = [];
    }
    newTask(task) {
        const { id, title, description, completed, level } = task;
        let todo = new Task(id, title, description, completed, level);
        this.tasks.push(todo);
    }
    get allTasks() {
        return this.tasks;
    }
}
