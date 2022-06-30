import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.scss";
import Layout from "./components/layouts/layout";

import RegisterForm from "./components/pure/forms/registerForm";
import NotFoundPage from "./pages/404/NotFoundPage";
import AboutPage from "./pages/about-faqs/AboutPage";
import LoginPage from "./pages/auth/LoginPage";
import Dashboard from "./pages/dashboard/DashboardPage";
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
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<HomePage />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/tasks" element={<TasksPage />} />
                        <Route
                            path="/tasks/:taskId"
                            element={<TaskDetailsPage />}
                        />
                        <Route path="/auth/login" element={<LoginPage />} />
                        <Route
                            path="/auth/register"
                            element={<RegisterForm />}
                        />
                        <Route path="*" element={<NotFoundPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
