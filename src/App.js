import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./routes/ErrorPage";
import LoginPage from "./routes/LoginPage";
import TestPage from "./routes/main/TestPage";
import TrialPage from "./routes/main/TrialPage";
import RecommendPage from "./routes/main/RecommendPage";
import ConsultPage from "./routes/main/ConsultPage";
import GoalPage from "./routes/main/GoalPage";
import { MantineProvider, createEmotionCache } from "@mantine/core";
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
        path: "/trial",
        element: <TrialPage />,
      },
      {
        path: "/test",
        element: <TestPage />,
      },
      {
        path: "/recommend",
        element: <RecommendPage />,
      },
      {
        path: "/consult",
        element: <ConsultPage />,
      },
    ],
  },
]);

const myCache = createEmotionCache({
  key: "mantine",
  prepend: false,
});

function App() {
  return (
    <MantineProvider
      emotionCache={myCache}
      withGlobalStyles
      withNormalizeCSS
      theme={{
        /** Put your mantine theme override here */
        colorScheme: "light",
      }}
    >
      <RouterProvider router={router} />
    </MantineProvider>
  );
}

export default App;
