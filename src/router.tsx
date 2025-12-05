import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./layout/AppLayout";

import Home from "./pages/Home";
import Clients from "./pages/Clients";
import Dashboard from "./pages/Dashboard";
import CheckIn from "./pages/CheckIn";
import Intake from "./pages/Intake";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "clients", element: <Clients /> },
      { path: "check-in", element: <CheckIn /> },
      { path: "intake", element: <Intake /> }, 
    ],
  },
]);

export default router;
