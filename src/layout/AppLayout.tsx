// AppLayout.tsx
import { NavLink, Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* SIDEBAR */}
      <aside className="w-64 bg-white shadow-md flex flex-col">
        <div className="px-6 py-5 border-b">
          <h2 className="text-xl font-semibold">Pantry System</h2>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md hover:bg-gray-200 ${
                isActive ? "bg-blue-600 text-white" : "text-gray-700"
              }`
            }
          >
            📊 Dashboard
          </NavLink>

          <NavLink
            to="/clients"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md hover:bg-gray-200 ${
                isActive ? "bg-blue-600 text-white" : "text-gray-700"
              }`
            }
          >
            👥 Clients
          </NavLink>

          <NavLink
            to="/checkin"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md hover:bg-gray-200 ${
                isActive ? "bg-blue-600 text-white" : "text-gray-700"
              }`
            }
          >
            🧾 Client Check-In
          </NavLink>

          <NavLink
            to="/intake"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md hover:bg-gray-200 ${
                isActive ? "bg-blue-600 text-white" : "text-gray-700"
              }`
            }
          >
            📦 Food Intake
          </NavLink>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
