import TaskComponent from "../pure/task";
import { LEVELS } from "../../models/levels.enun";
import { Task } from "../../models/tasks.class";

const TaskList = (props) => {
    const defaultTask = new Task(
        "Example title",
        "Default description",
        false,
        LEVELS.NORMAL
    );
    return (
        <div>
            <h1>Your tasks:</h1>
            {/* TODO: crear map para iterar y renderizar lista de tareas */}
            <TaskComponent task={defaultTask} />
        </div>
    );
};

export default TaskList;
