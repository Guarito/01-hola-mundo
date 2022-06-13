import { LEVELS } from "../../../models/levels.enun";

const TaskLevelBadge = ({ level }) => {
    switch (level) {
        case LEVELS.NORMAL:
            return (
                <h6 className="mb-0">
                    <span className="badge text-bg-info">{level}</span>
                </h6>
            );

        case LEVELS.PRIORITY:
            return (
                <h6 className="mb-0">
                    <span className="badge text-bg-warning">{level}</span>
                </h6>
            );
        case LEVELS.BLOCKING:
            return (
                <h6 className="mb-0">
                    <span className="badge text-bg-danger">{level}</span>
                </h6>
            );
        default:
            break;
    }
};

export default TaskLevelBadge;
