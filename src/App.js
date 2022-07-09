import { composeWithDevTools } from "@redux-devtools/extension";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "./App.scss";
import { AuthContextProvider } from "./context/auth/AuthContext";
import AppRouter from "./routes/AppRouter";
import reducer from "./store/reducers";
let store = createStore(reducer, composeWithDevTools());

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <AuthContextProvider>
                    <AppRouter />
                </AuthContextProvider>
            </Provider>
        </div>
    );
}

export default App;
