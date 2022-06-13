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
        <div className="col-12">
            <div className="card">
                <div className="card-header p-3 text-dark">
                    <h5 className="display-6">Your tasks:</h5>
                </div>
                {/** Card body */}
                <div
                    className="card-body"
                    style={{ position: "relative", height: "400px" }}
                    data-mdb-perfect-perfect-scrollbar="true"
                >
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Description</th>
                                <th scope="col">Priority</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* TODO: crear map para iterar y renderizar lista de tareas */}
                            <TaskComponent task={defaultTask} />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TaskList;
