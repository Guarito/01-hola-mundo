import { useEffect, useState } from "react";
import { Task, Tasks } from "../../models/tasks.class";
import TaskForm from "../pure/forms/taskForm";
import TasksTable from "./tasksTable";
import NoTasks from "../pure/noTasks";
import { Stack } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/actions/todoActions";

const TaskList = (props) => {
    const dispatch = useDispatch();

    //State del componente para manejar el listado de tarea
    const tasksFromLocalStorage =
        JSON.parse(localStorage.getItem("tasks")) || [];
    // let list = [];

    //probando
    let tasksList = new Tasks();
    tasksFromLocalStorage.forEach((task) => tasksList.newTask(task));
    console.log(tasksList.allTasks);

    const [tasks, setTasks] = useState(tasksList.allTasks);
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
        dispatch(addTodo(values));
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
