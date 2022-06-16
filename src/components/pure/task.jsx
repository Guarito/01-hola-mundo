import PropTypes from "prop-types";
import { useEffect } from "react";

import { Task } from "../../models/tasks.class";
import "../../styles/task.scss";
import TaskLevelBadge from "./helpers/taskLevelBadge";

const TaskComponent = ({ task, changeStatus, deleteTask }) => {
    const { id, name, description, level, completed } = task;

    useEffect(() => {
        console.log("Tarea creada");
    }, [task]);

    return (
        <tr>
            <th>
                <span>{name}</span>
            </th>
            <th>
                <span>{description}</span>
            </th>
            <th>
                <TaskLevelBadge level={level} />
            </th>
            <th>
                <span>
                    {!completed ? (
                        <i
                            className="bi-square pointer"
                            style={{ color: "gray" }}
                            onClick={() => changeStatus(task)}
                        ></i>
                    ) : (
                        <i
                            className="bi-check2-square pointer"
                            style={{ color: "green" }}
                            onClick={() => changeStatus(task)}
                        ></i>
                    )}
                    <i
                        className="bi-trash pointer"
                        style={{ color: "tomato" }}
                        onClick={() => deleteTask(task)}
                    ></i>
                </span>
            </th>
        </tr>
    );
};

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    changeStatus: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
};

export default TaskComponent;
