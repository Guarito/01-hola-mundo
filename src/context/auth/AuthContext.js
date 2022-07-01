import { useReducer } from "react";
import { createContext } from "react";
import { authReducer } from "./authReducer";

export const AuthContext = createContext();

const init = () => {
    return (
        JSON.parse(localStorage.getItem("credentials")) || {
            isLogged: false,
        }
    );
};

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {}, init);
    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};
