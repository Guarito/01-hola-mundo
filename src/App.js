import "./App.scss";
import TaskList from "./components/container/tasks";
import RegisterForm from "./components/pure/forms/registerForm";

function App() {
    return (
        <div className="App">
            <main className="App-main">
                {/* <TaskList /> */}
                <RegisterForm />
            </main>
        </div>
    );
}

export default App;
