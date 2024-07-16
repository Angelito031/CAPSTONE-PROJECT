import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./layout/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./components/ErrorPage.jsx";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";
import Jobs from "./layout/Jobs.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/jobs",
    element: <Jobs />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/jobs/filter/:filter",
        element: <Jobs />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/jobs/search/:searchQuery",
        element: <Jobs />,
        errorElement: <ErrorPage />,
      },
    ],
  },
  {
    path: "/job/:jobId",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  
  {
    path: "/students",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/student/:studentId",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/companies",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/company/:companyId",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/profile/:userId",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
