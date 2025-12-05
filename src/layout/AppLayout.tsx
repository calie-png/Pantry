// AppLayout.tsx
import { NavLink, Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="flex h-screen bg-taupe-light">
      {/* SIDEBAR */}
      <aside className="w-64 bg-taupe shadow-md flex flex-col border-r border-taupe-dark/40">
        <div className="px-6 py-5 border-b border-taupe-dark/30">
          <h2 className="text-xl font-semibold text-slateblue-dark">Pantry System</h2>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
          {/* Dashboard */}
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md transition ${
                isActive
                  ? "bg-slateblue text-white"
                  : "text-[#4b4b4b] hover:bg-taupe-dark/40"
              }`
            }
          >
            📊 Dashboard
          </NavLink>

          {/* Clients */}
          <NavLink
            to="/clients"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md transition ${
                isActive
                  ? "bg-slateblue text-white"
                  : "text-[#4b4b4b] hover:bg-taupe-dark/40"
              }`
            }
          >
            👥 Clients
          </NavLink>

          {/* Check-In */}
          <NavLink
            to="/checkin"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md transition ${
                isActive
                  ? "bg-slateblue text-white"
                  : "text-[#4b4b4b] hover:bg-taupe-dark/40"
              }`
            }
          >
            🧾 Client Check-In
          </NavLink>

          {/* Intake */}
          <NavLink
            to="/intake"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md transition ${
                isActive
                  ? "bg-slateblue text-white"
                  : "text-[#4b4b4b] hover:bg-taupe-dark/40"
              }`
            }
          >
            📦 Food Intake
          </NavLink>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 overflow-y-auto bg-taupe-light">
        <Outlet />
      </main>
    </div>
  );
}
