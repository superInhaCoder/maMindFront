import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./routes/ErrorPage";
import LoginPage from "./routes/LoginPage";
import TestPage from "./routes/main/TestPage";
import ConsultPage from "./routes/main/ConsultPage";
import GoalPage from "./routes/main/GoalPage";
import { MantineProvider } from "@mantine/core";
import React from "react";
import "../src/index.css";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <GoalPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/goal",
        element: <GoalPage />,
      },
      {
        path: "/test",
        element: <TestPage />,
      },
      {
        path: "/consult",
        element: <ConsultPage />,
      },
    ],
  },
]);

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <RouterProvider router={router} />
    </MantineProvider>
  );
}

export default App;
