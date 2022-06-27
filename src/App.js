import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.scss";

import RegisterForm from "./components/pure/forms/registerForm";
import NotFoundPage from "./pages/404/NotFoundPage";
import HomePage from "./pages/home/HomePage";
import TaskDetailsPage from "./pages/tasks/TaskDetailsPage";
import TasksPage from "./pages/tasks/TasksPage";

function App() {
    return (
        // <div className="App">
        //     <main className="App-main">
        //         <TaskList />
        //         <RegisterForm />
        //     </main>
        // </div>

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/tasks" element={<TasksPage />} />
                <Route path="/tasks/:id" element={<TaskDetailsPage />} />
                <Route path="/api/register" element={<RegisterForm />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
