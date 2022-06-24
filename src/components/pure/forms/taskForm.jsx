import { v4 as uuidv4 } from "uuid";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { MyTextInput, MySelect } from "./customFields";
import { LEVELS } from "../../../models/levels.enun";

const initialTask = {
    title: "",
    description: "",
    level: LEVELS.NORMAL,
};

const validationSchema = yup.object().shape({
    title: yup.string().required().max(20),
    description: yup.string().required(),
    level: yup
        .string()
        .required()
        .oneOf([LEVELS.NORMAL, LEVELS.HIGH, LEVELS.BLOCKING]),
});

const TaskForm = ({ addTask }) => {
    return (
        <>
            <h1>Add task</h1>
            <Formik
                initialValues={initialTask}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        addTask({
                            ...values,
                            id: uuidv4(),
                        });
                        setSubmitting(false);
                    }, 400);
                }}
            >
                <Form className="form">
                    <MyTextInput
                        label="Title"
                        name="title"
                        type="text"
                        placeholder="Task title"
                    />
                    <MyTextInput
                        label="Description"
                        name="description"
                        type="text"
                        placeholder="Task description"
                    />
                    <MySelect label="Priority level" name="level">
                        <option value={LEVELS.NORMAL}>Normal</option>
                        <option value={LEVELS.HIGH}>High</option>
                        <option value={LEVELS.BLOCKING}>Blocking</option>
                    </MySelect>
                    <button type="submit" className="btn btn-primary">
                        Add
                    </button>
                </Form>
            </Formik>
        </>
    );
};

export default TaskForm;
