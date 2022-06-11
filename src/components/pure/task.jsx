import PropTypes from "prop-types";
import { useEffect } from "react";
import { Task } from "../../models/tasks.class";

const TaskComponent = ({ task }) => {
    const { name, description, level, completed } = task;

    useEffect(() => {
        console.log("Tarea creada");
        return () => {};
    }, [task]);
    return (
        <div>
            <h2>Name: {name}</h2>
            <p>Description: {description}</p>
            <h4>Level: {level}</h4>
            <h4>{completed ? "COMPLETED" : "PENDING"}</h4>
        </div>
    );
};

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task),
};

export default TaskComponent;
