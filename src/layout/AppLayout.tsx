<nav className="flex-1 px-4 py-6 space-y-2">

  <NavLink
    to="/dashboard"
    className={({ isActive }) =>
      `block px-4 py-2 rounded-md ${
        isActive
          ? "bg-slateblue text-white"
          : "text-gray-800 hover:text-white hover:bg-slateblue/70"
      }`
    }
  >
    📊 Dashboard
  </NavLink>

  <NavLink
    to="/clients"
    className={({ isActive }) =>
      `block px-4 py-2 rounded-md ${
        isActive
          ? "bg-slateblue text-white"
          : "text-gray-800 hover:text-white hover:bg-slateblue/70"
      }`
    }
  >
    👥 Clients
  </NavLink>

  <NavLink
    to="/checkin"
    className={({ isActive }) =>
      `block px-4 py-2 rounded-md ${
        isActive
          ? "bg-slateblue text-white"
          : "text-gray-800 hover:text-white hover:bg-slateblue/70"
      }`
    }
  >
    🧾 Client Check-In
  </NavLink>

  <NavLink
    to="/intake"
    className={({ isActive }) =>
      `block px-4 py-2 rounded-md ${
        isActive
          ? "bg-slateblue text-white"
          : "text-gray-800 hover:text-white hover:bg-slateblue/70"
      }`
    }
  >
    📦 Food Intake
  </NavLink>

  {/* ✅ NEW QUEUE LINK — perfectly matching your existing style */}
  <NavLink
    to="/queue"
    className={({ isActive }) =>
      `block px-4 py-2 rounded-md ${
        isActive
          ? "bg-slateblue text-white"
          : "text-gray-800 hover:text-white hover:bg-slateblue/70"
      }`
    }
  >
    🧑‍🤝‍🧑 Queue
  </NavLink>

</nav>
export default AppLayout;

