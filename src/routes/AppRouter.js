import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import Layout from "../components/layouts/layout";
import RegisterForm from "../components/pure/forms/registerForm";
import NotFoundPage from "../pages/404/NotFoundPage";
import AboutPage from "../pages/about-faqs/AboutPage";
import LoginPage from "../pages/auth/LoginPage";
import Dashboard from "../pages/dashboard/DashboardPage";
import HomePage from "../pages/home/HomePage";
import TaskDetailsPage from "../pages/tasks/TaskDetailsPage";
import TasksPage from "../pages/tasks/TasksPage";

const AppRouter = () => {
    const isLogged = !!localStorage.getItem("credentials");
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/tasks" element={<TasksPage />} />
                    <Route
                        path="/tasks/:taskId"
                        element={<TaskDetailsPage />}
                    />
                    <Route
                        path="/auth/login"
                        element={
                            isLogged ? (
                                <Navigate to="/" replace />
                            ) : (
                                <LoginPage />
                            )
                        }
                    />
                    <Route path="/auth/register" element={<RegisterForm />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
