import TaskComponent from "../pure/task";

const TasksTable = ({ tasks, changeTaskStatus, deleteTask }) => {
    return (
        <>
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
        </>
    );
};

export default TasksTable;
