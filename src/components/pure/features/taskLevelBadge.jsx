import { Badge } from "react-bootstrap";
import { LEVELS } from "../../../models/levels.enun";

const TaskLevelBadge = ({ level }) => {
    switch (level) {
        case LEVELS.NORMAL:
            return <Badge bg="success">{level}</Badge>;

        case LEVELS.HIGH:
            return <Badge bg="warning">{level}</Badge>;
        case LEVELS.BLOCKING:
            return <Badge bg="danger">{level}</Badge>;
        default:
            break;
    }
};

export default TaskLevelBadge;
