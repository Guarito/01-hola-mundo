import PropTypes from "prop-types";
import { Task } from "../../models/tasks.class";

const TaskComponent = ({ task }) => {
    return (
        <div>
            <h2>Name: {task.name}</h2>
            <p>Description: {task.description}</p>
            <h4>Level: {task.level}</h4>
            <h4>{task.completed ? "COMPLETED" : "PENDING"}</h4>
        </div>
    );
};

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task),
};

export default TaskComponent;
