import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { MyTextInput } from "./customFields";

let validationSchema = yup.object().shape({
    email: yup.string().email().required("Required"),
    password: yup.string().required("Required"),
});

const LoginForm = () => {
    const navigate = useNavigate();
    return (
        <>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    // setTimeout(() => {
                    //     alert(JSON.stringify(values, null, 2));
                    //     const { email, password } = values;

                    //     setSubmitting(false);
                    // }, 400);
                    localStorage.setItem("credentials", JSON.stringify(values));
                    navigate("/dashboard");
                }}
            >
                <Form className="form">
                    <MyTextInput
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="Email"
                    />
                    <MyTextInput
                        label="Password"
                        name="password"
                        type="password"
                        placeholder="Password"
                    />

                    <button className="btn btn-outline-dark" type="submit">
                        Login
                    </button>
                </Form>
            </Formik>
        </>
    );
};

export default LoginForm;
