import { useReducer } from "react";
import { createContext } from "react";
import { authReducer } from "./authReducer";

export const AuthContext = createContext();

const init = () => {
    try {
        const userInfo = JSON.parse(localStorage.getItem("credentials")) || {
            isLogged: false,
        };
        console.log("userInfo", userInfo);
        return userInfo;
    } catch (error) {
        console.log("Error:", error);
    }
};

export const AuthContextProvider = ({ children }) => {
    const [user, dispatch] = useReducer(authReducer, {}, init);
    return (
        <AuthContext.Provider value={{ user, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};
