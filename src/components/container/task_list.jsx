import { useEffect, useState } from "react";
import TaskComponent from "../pure/task";
import { LEVELS } from "../../models/levels.enun";
import { Task } from "../../models/tasks.class";
import TaskForm from "../pure/forms/taskForm";

const TaskList = (props) => {
    // const defaultTask = new Task(
    //     "Example title",
    //     "Default description",
    //     false,
    //     LEVELS.NORMAL
    // );

    //State del componente para manejar el listado de tareas
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    //Control ciclo de vida del componente
    useEffect(() => {
        // console.log("Montura de listado de tareas");

        setLoading(false);
    }, [tasks]);

    /**
     * Funcion para agregar nueva tarea
     */
    const addTask = (values) => {
        const { id, title, description, completed, level } = values;

        setTasks([
            ...tasks,
            new Task(id, title, description, completed, level),
        ]);
    };

    /**
     * Funcion para cambiar el status de una tarea en especifico
     */
    const changeTaskStatus = (task) => {
        const tempTasks = [...tasks];
        const taskToChange = tempTasks.find((item) => item.id === task.id);
        taskToChange.completed = !taskToChange.completed;

        setTasks(tempTasks);
    };

    /**
     * Funcion para eliminar una tarea
     */
    const deleteTask = (task) => {
        const tempTasks = tasks.filter(
            (taskToPreserve) => taskToPreserve.id !== task.id
        );

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
                            {tasks.map((task) => (
                                <TaskComponent
                                    key={task.id}
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
