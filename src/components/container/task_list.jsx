import { useEffect, useState } from "react";
import TaskComponent from "../pure/task";
import { LEVELS } from "../../models/levels.enun";
import { Task } from "../../models/tasks.class";
import TaskForm from "../pure/forms/taskForm";

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
        console.log("Montura de listado de tareas");

        setLoading(false);
        return () => {
            console.log("TaskList sera desmontado");
        };
    }, [tasks]);

    /**
     * Funcion para agregar nueva tarea
     */
    const addTask = (values) => {
        const { title, description, completed, level } = values;
        console.log(title, description, completed, level);
        setTasks([...tasks, new Task(title, description, completed, level)]);
    };

    /**
     * Funcion para cambiar el status de una tarea en especifico
     */
    const changeTaskStatus = (task) => {
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks[index].completed = !tempTasks[index].completed;

        setTasks(tempTasks);
    };

    /**
     * Funcion para eliminar una tarea
     */
    const deleteTask = (task) => {
        const indexToDelete = tasks.indexOf(task);
        const tempTasks = tasks.filter((nt, index) => index !== indexToDelete);
        // console.log(tempTasks);
        setTasks(tempTasks);
    };
    return (
        <div className="col-12">
            <div className="card">
                <div className="card-header p-3 text-dark">
                    <h5 className="display-6">Your tasks:</h5>

                    <TaskForm addTask={addTask} />
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
                            {/* <TaskComponent task={defaultTask} /> */}
                            {tasks.map((task, index) => (
                                <TaskComponent
                                    key={index}
                                    task={task}
                                    changeStatus={changeTaskStatus}
                                    deleteTask={deleteTask}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TaskList;
