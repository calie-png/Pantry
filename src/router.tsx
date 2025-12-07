import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./layout/AppLayout";

import Home from "./pages/Home.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import ClientsPage from "./pages/ClientsPage.tsx";
import ClientDetailsPage from "./pages/ClientDetailsPage.tsx";
import EditClientPage from "./pages/EditClientPage.tsx";
import CheckInPage from "./pages/CheckInPage.tsx";
import IntakePage from "./pages/IntakePage.tsx";
import NewClientPage from "./pages/NewClientPage.tsx";
import FindClient from "./pages/FindClient";
import QueueDashboard from "./pages/QueueDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "clients", element: <ClientsPage /> },
      { path: "clients/:id", element: <ClientDetailsPage /> },
      { path: "clients/new", element: <NewClientPage /> },
      { path: "clients/:id/edit", element: <EditClientPage /> },
      { path: "checkin", element: <CheckInPage /> },
      { path: "intake", element: <IntakePage /> },
      { path: "checkin/find", element: <FindClient /> },
      { path: "queue", element: <QueueDashboard /> },
    ],
  },
]);

export default router;
