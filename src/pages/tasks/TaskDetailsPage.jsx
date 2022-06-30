import { useParams } from "react-router-dom";

const TaskDetailsPage = ({ task }) => {
    let params = useParams();
    console.log(params);
    return <>Task details page</>;
};

export default TaskDetailsPage;
