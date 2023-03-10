import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./routes/ErrorPage";
import LoginPage from "./routes/LoginPage";
import TestPage from "./routes/main/TestPage";
import TrialPage from "./routes/main/TrialPage";
import RecommendPage from "./routes/main/RecommendPage";
import ConsultPage from "./routes/main/ConsultPage";
import GoalPage from "./routes/main/GoalPage";
import ResultPage from "./routes/main/ResultPage";
import ConsultResultPage from "./routes/main/ConsultResultPage";
import { MantineProvider, createEmotionCache } from "@mantine/core";
import React, { useEffect } from "react";
import "../src/index.css";
import MyGraph from "./routes/main/goal/MyGraph";
import { customAxios } from "./config/api";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <LoginPage />,
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
        path: "/result",
        element: <ResultPage />,
      },
      {
        path: "/consult",
        element: <ConsultPage />,
      },
      {
        path: "/consultResult",
        element: <ConsultResultPage />,
      },
      {
        path: "/my-graph",
        element: <MyGraph />,
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
