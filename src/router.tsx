import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./layout/AppLayout";

// Correct imports based on your actual filenames
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import ClientsPage from "./pages/ClientsPage";
import CheckInPage from "./pages/CheckInPage";
import IntakePage from "./pages/IntakePage";

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
