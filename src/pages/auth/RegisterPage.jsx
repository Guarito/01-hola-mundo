import { Link } from "react-router-dom";
import RegisterForm from "../../components/pure/forms/registerForm";
const RegisterPage = () => {
    return (
        <>
            <RegisterForm />
            <p>
                Already have an account?{" "}
                <Link to="/auth/login" className="link">
                    Log in
                </Link>
            </p>
        </>
    );
};

export default RegisterPage;
