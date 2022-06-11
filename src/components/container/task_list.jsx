import { useEffect, useState } from "react";
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
    //State del componente para manejar el listado de tareas
    const [tasks, setTasks] = useState([defaultTask]);

    const [loading, setLoading] = useState(true);

    //Control ciclo de vida del componente
    useEffect(() => {
        console.log("Modificacion de listado de tareas");

        setLoading(false);
        return () => {
            console.log("TaskList sera desmontado");
        };
    }, [tasks]);
    /**
     * Funcion para cambiar el status de una tarea en especifico
     */
    const changeTaskStatus = (id) => {
        console.log("TODO: Cambiar estado de una tarea");
    };
    return (
        <div>
            <h1>Your tasks:</h1>
            {/* TODO: crear map para iterar y renderizar lista de tareas */}
            <TaskComponent task={defaultTask} />
        </div>
    );
};

export default TaskList;
