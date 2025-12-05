import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./layout/AppLayout";

import Home from "./pages/Home"; // if you still want a homepage
import Dashboard from "./pages/Dashboard";
import Clients from "./pages/Clients";
import CheckIn from "./pages/CheckIn";
import Intake from "./pages/Intake"; // optional

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,   // ← wraps all pages in the sidebar layout
    children: [
      { index: true, element: <Home /> }, // loads at "/"
      { path: "dashboard", element: <Dashboard /> },
      { path: "clients", element: <Clients /> },
      { path: "check-in", element: <CheckIn /> },
      { path: "intake", element: <Intake /> }, // optional
    ],
  },
]);

export default router;
