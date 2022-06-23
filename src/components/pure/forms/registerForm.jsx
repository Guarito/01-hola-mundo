import React from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { MyTextInput } from "./customFields";

let validationSchema = yup.object().shape({
    firstName: yup.string().required("Required").max(12),
    lastName: yup.string().required("Required").max(12),
    email: yup.string().email().required("Required"),
    password: yup.string().required("Required").min(6).max(20),
    confirmPassword: yup
        .string()
        .required("Confirm your password")
        .oneOf([yup.ref("password")], "Password do not match"),
});

const RegisterForm = () => {
    // Pass the useFormik() hook initial form values and a submit function that will
    // be called when the form is submitted

    return (
        <>
            <h1>Register</h1>
            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                <Form className="form">
                    <MyTextInput
                        label="First Name"
                        name="firstName"
                        type="text"
                        placeholder="First name"
                    />
                    <MyTextInput
                        label="Last Name"
                        name="lastName"
                        type="text"
                        placeholder="Last name"
                    />
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
                    <MyTextInput
                        label="Confirm Password"
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm password"
                    />
                    <button className="btn btn-outline-dark" type="submit">
                        Submit
                    </button>
                </Form>
            </Formik>
        </>
    );
};

export default RegisterForm;
