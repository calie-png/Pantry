import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../pages/Dashboard";
import ClientsPage from "../pages/ClientsPage";
import CheckInPage from "../pages/CheckInPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/clients",
    element: <ClientsPage />,
  },
  {
    path: "/checkin",
    element: <CheckInPage />,
  },
]);

export default router;
