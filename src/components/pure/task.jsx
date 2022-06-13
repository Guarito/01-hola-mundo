import PropTypes from "prop-types";
import { useEffect } from "react";

import { Task } from "../../models/tasks.class";
import "../../styles/task.scss";
import TaskLevelBadge from "./helpers/taskLevelBadge";

const TaskComponent = ({ task }) => {
    const { name, description, level, completed } = task;

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
                        <i className="bi-square" style={{ color: "gray" }}></i>
                    ) : (
                        <i
                            className="bi-check2-square"
                            style={{ color: "green" }}
                        ></i>
                    )}
                    <i className="bi-trash" style={{ color: "tomato" }}></i>
                </span>
            </th>
        </tr>
    );
};

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task),
};

export default TaskComponent;
