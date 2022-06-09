import { Link } from "react-router-dom";
import LoginForm from "../../components/pure/forms/loginForm";
const LoginPage = () => {
    return (
        <>
            <h1>Login Page</h1>
            <LoginForm />
            <p>
                Not member yet?{" "}
                <Link to="/auth/register" className="link">
                    Register now
                </Link>
            </p>
        </>
    );
};

export default LoginPage;
