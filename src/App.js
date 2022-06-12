import "./App.scss";
import TaskList from "./components/container/task_list";

function App() {
    return (
        <div className="App">
            <main className="App-main">
                <TaskList />
            </main>
        </div>
    );
}

export default App;
