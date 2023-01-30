import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./routes/ErrorPage";
import LoginPage from "./routes/LoginPage";
import HomePage from "./routes/main/GoalPage";
import TestPage from "./routes/main/TestPage";
import ConsultPage from "./routes/main/ConsultPage";
import GoalPage from "./routes/main/GoalPage";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
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
  return <RouterProvider router={router} />;
}

export default App;
