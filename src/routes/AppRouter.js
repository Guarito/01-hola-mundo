import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import Layout from "../components/layouts/layout";
import NotFoundPage from "../pages/404/NotFoundPage";
import AboutPage from "../pages/about-faqs/AboutPage";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import Dashboard from "../pages/dashboard/DashboardPage";
import HomePage from "../pages/home/HomePage";
import TaskDetailsPage from "../pages/tasks/TaskDetailsPage";
import TasksPage from "../pages/tasks/TasksPage";

const AppRouter = () => {
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
                    <Route path="/auth/login" element={<LoginPage />} />
                    <Route path="/auth/register" element={<RegisterPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
