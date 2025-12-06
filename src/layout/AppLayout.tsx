// AppLayout.tsx
import { NavLink, Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="flex h-screen bg-taupe-light">
      {/* SIDEBAR */}
      <aside className="w-64 bg-white shadow-md flex flex-col border-r border-taupe-dark/40">
        <div className="px-6 py-5 border-b">
          <h2 className="text-xl font-semibold">Pantry System</h2>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md hover:bg-gray-200 ${
                isActive ? "bg-slateblue text-white" : "text-[#4b4b4b]"
              }`
            }
          >
            📊 Dashboard
          </NavLink>

          <NavLink
            to="/clients"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md hover:bg-gray-200 ${
                isActive ? "bg-slateblue text-white" : "text-[#4b4b4b]"
              }`
            }
          >
            👥 Clients
          </NavLink>

          <NavLink
            to="/checkin"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md hover:bg-gray-200 ${
                isActive ? "bg-slateblue text-white" : "text-[#4b4b4b]"
              }`
            }
          >
            🧾 Client Check-In
          </NavLink>

          <NavLink
            to="/intake"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md hover:bg-gray-200 ${
                isActive ? "bg-slateblue text-white" : "text-[#4b4b4b]"
              }`
            }
          >
            📦 Food Intake
          </NavLink>
        </nav>
      </aside>

      {/* MAIN AREA */}
      <div className="flex flex-col flex-1 overflow-hidden">

        {/* HEADER */}
        <header className="h-16 bg-white border-b border-taupe-dark/40 px-6 flex items-center justify-between shadow-sm">
          <h1 className="text-xl font-semibold text-taupe-dark">Food Pantry System</h1>

          <div className="flex items-center space-x-4">
            <span className="text-taupe-dark/70">Admin</span>
            <button className="px-3 py-1 text-sm rounded-md bg-slateblue text-white hover:bg-slateblue/90">
              Logout
            </button>
          </div>
        </header>

        {/* CONTENT */}
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
