import { useEffect, useState } from "react";
import { Task } from "../../models/tasks.class";
import TaskForm from "../pure/forms/taskForm";
import TasksTable from "./tasksTable";
import NoTasks from "../pure/noTasks";
import { Stack } from "react-bootstrap";

const TaskList = (props) => {
    // const defaultTask = new Task(
    //     "Example title",
    //     "Default description",
    //     false,
    //     LEVELS.NORMAL
    // );

    //State del componente para manejar el listado de tareas
    const initialTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    console.log(initialTasks);
    const [tasks, setTasks] = useState(initialTasks);
    const [loading, setLoading] = useState(true);

    //Control ciclo de vida del componente
    useEffect(() => {
        // console.log("Montura de listado de tareas");
        setLoading(false);
        localStorage.setItem("tasks", JSON.stringify(tasks));
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
    const changeTaskStatus = (id) => {
        const tempTasks = [...tasks];
        const taskToChange = tempTasks.find((item) => item.id === id);
        taskToChange.completed = !taskToChange.completed;

        setTasks(tempTasks);
    };

    /**
     * Funcion para eliminar una tarea
     */
    const deleteTask = (id) => {
        const tempTasks = tasks.filter(
            (taskToPreserve) => taskToPreserve.id !== id
        );

        setTasks(tempTasks);
    };
    return (
        <Stack direction="horizontal" gap={3}>
            <TaskForm addTask={addTask} />
            <div className="card w-100">
                <div className="card-header p-3 text-dark">
                    <h5 className="display-6">Your tasks:</h5>
                </div>
                {/** Card body */}
                <div
                    className="card-body"
                    style={{ position: "relative", height: "400px" }}
                    data-mdb-perfect-perfect-scrollbar="true"
                >
                    {tasks.length > 0 ? (
                        <TasksTable
                            tasks={tasks}
                            changeTaskStatus={changeTaskStatus}
                            deleteTask={deleteTask}
                        />
                    ) : (
                        <NoTasks />
                    )}
                </div>
            </div>
        </Stack>
    );
};

export default TaskList;
