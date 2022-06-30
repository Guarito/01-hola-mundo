import { useReducer } from "react";
import "./App.scss";
import { AuthContext } from "./auth/AuthContext";
import { authReducer } from "./auth/authReducer";
import AppRouter from "./routes/AppRouter";

const init = () => {
    return (
        JSON.parse(localStorage.getItem("credentials")) || {
            isLogged: false,
        }
    );
};

function App() {
    const [user, dispatch] = useReducer(authReducer, {}, init);
    return (
        <div className="App">
            <AuthContext.Provider value={{ user, dispatch }}>
                <AppRouter />
            </AuthContext.Provider>
        </div>
    );
}

export default App;
