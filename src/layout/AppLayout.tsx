import { NavLink, Outlet } from "react-router-dom";
import Header from "./Header"; // ⬅️ add this import

export default function AppLayout() {
  return (
    <div className="flex h-screen bg-taupe-light">
      {/* SIDEBAR */}
      <aside className="w-64 bg-white shadow-md flex flex-col border-r border-taupe-dark/40">
        <div className="px-6 py-5 border-b">
          <h2 className="text-xl font-semibold text-taupe-dark">Pantry System</h2>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md hover:bg-taupe-lighter ${
                isActive ? "bg-slateblue text-white" : "text-taupe-dark"
              }`
            }
          >
            📊 Dashboard
          </NavLink>

          <NavLink
            to="/clients"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md hover:bg-taupe-lighter ${
                isActive ? "bg-slateblue text-white" : "text-taupe-dark"
              }`
            }
          >
            👥 Clients
          </NavLink>

          <NavLink
            to="/checkin"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md hover:bg-taupe-lighter ${
                isActive ? "bg-slateblue text-white" : "text-taupe-dark"
              }`
            }
          >
            🧾 Client Check-In
          </NavLink>

          <NavLink
            to="/intake"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md hover:bg-taupe-lighter ${
                isActive ? "bg-slateblue text-white" : "text-taupe-dark"
              }`
            }
          >
            📦 Food Intake
          </NavLink>
        </nav>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex flex-col flex-1 overflow-y-auto">
        <Header /> {/* ⬅️ new header */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
