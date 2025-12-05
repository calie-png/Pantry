import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./layout/AppLayout";

import Home from "./pages/Home";  
import Dashboard from "./pages/Dashboard";
import ClientsPage from "./pages/ClientsPage";
import CheckInPage from "./pages/CheckInPage";
import IntakePage from "./pages/IntakePage"; // once created

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "clients", element: <ClientsPage /> },
      { path: "checkin", element: <CheckInPage /> },
      { path: "intake", element: <IntakePage /> },
    ],
  },
]);

export default router;
