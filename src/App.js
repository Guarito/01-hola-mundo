import "./App.scss";
import { AuthContextProvider } from "./context/auth/AuthContext";

import AppRouter from "./routes/AppRouter";

function App() {
    return (
        <div className="App">
            <AuthContextProvider>
                <AppRouter />
            </AuthContextProvider>
        </div>
    );
}

export default App;
