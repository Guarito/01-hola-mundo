import { LEVELS } from "./levels.enun";

export class Task {
    id = "";
    name = "";
    description = "";
    completed = false;
    level = LEVELS.NORMAL;

    //Constructor
    constructor(id, name, description, completed, level) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.completed = completed;
        this.level = level;
    }
}
