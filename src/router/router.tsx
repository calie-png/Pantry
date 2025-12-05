import { createBrowserRouter } from "react-router-dom";
import App from "../App";

// Later we will add pages like Dashboard, IntakeForm, CheckIn, Admin, etc.
// For now, keep it minimal so Vite can build successfully.

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  }
]);
