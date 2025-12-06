import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./layout/AppLayout";

// Correct imports based on your real filenames
import Home from "./pages/Home.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import ClientsPage from "./pages/ClientsPage.tsx";
import CheckInPage from "./pages/CheckInPage.tsx";
import IntakePage from "./pages/IntakePage.tsx";

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
