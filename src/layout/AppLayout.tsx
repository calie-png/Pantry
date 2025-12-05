import { Link, Outlet, useLocation } from "react-router-dom";

export default function AppLayout() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6 hidden md:block">
        <h2 className="text-xl font-bold mb-6">Pantry System</h2>

        <nav className="flex flex-col gap-3">
          <Link
            to="/dashboard"
            className={`hover:text-blue-600 ${
              location.pathname === "/dashboard" ? "font-bold text-blue-600" : ""
            }`}
          >
            📊 Dashboard
          </Link>

          <Link
            to="/clients"
            className={`hover:text-blue-600 ${
              location.pathname === "/clients" ? "font-bold text-blue-600" : ""
            }`}
          >
            👥 Clients
          </Link>

          <Link
            to="/check-in"
            className={`hover:text-blue-600 ${
              location.pathname === "/check-in" ? "font-bold text-blue-600" : ""
            }`}
          >
            📝 Check-In
          </Link>

          <Link
            to="/intake"
            className={`hover:text-blue-600 ${
              location.pathname === "/intake" ? "font-bold text-blue-600" : ""
            }`}
          >
            📦 Intake
          </Link>
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}
