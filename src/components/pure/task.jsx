import PropTypes from "prop-types";
import { useEffect } from "react";
import { Task } from "../../models/tasks.class";
import "../../styles/task.scss";

const TaskComponent = ({ task }) => {
    const { name, description, level, completed } = task;

    useEffect(() => {
        console.log("Tarea creada");
        return () => {};
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
                <span>{level}</span>
            </th>
            <th>
                <span>
                    {!completed ? (
                        <i
                            className="bi bi-square"
                            style={{ color: "gray" }}
                        ></i>
                    ) : (
                        <i
                            className="bi bi-check2-square"
                            style={{ color: "green" }}
                        ></i>
                    )}
                    <i className="bi bi-trash" style={{ color: "red" }}></i>
                </span>
            </th>
        </tr>
    );
};

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task),
};

export default TaskComponent;
