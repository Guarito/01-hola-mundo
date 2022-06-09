import { LEVELS } from "./levels.enun";

export class Task {
    name = "";
    description = "";
    completed = false;
    level = LEVELS.NORMAL;

    //Constructor
    constructor(name, description, completed, level) {
        this.name = name;
        this.description = description;
        this.completed = completed;
        this.level = level;
    }
}
