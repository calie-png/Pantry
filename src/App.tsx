import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-10 flex justify-center">
      <div className="max-w-6xl w-full">

        {/* Header */}
        <h1 className="text-3xl font-bold text-center mb-2">Food Pantry System</h1>
        <p className="text-center text-gray-600 mb-10">
          Welcome to your pantry management hub. Choose a section to get started.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Client Check-In */}
          <div className="bg-white rounded-xl shadow p-8 text-center flex flex-col items-center">
            <div className="text-5xl mb-4">🧾</div>
            <h2 className="text-lg font-semibold mb-1">Client Check-In Dashboard</h2>
            <p className="text-gray-600 mb-6">Quickly log client arrivals.</p>
            <Link
              to="/checkin"
              className="bg-blue-900 text-white px-5 py-2 rounded-md font-semibold hover:bg-blue-800 transition"
            >
              START CHECK-IN
            </Link>
          </div>

          {/* Queue */}
          <div className="bg-white rounded-xl shadow p-8 text-center flex flex-col items-center">
            <div className="text-5xl mb-4">🧑‍🤝‍🧑</div>
            <h2 className="text-lg font-semibold mb-1">Queue Management</h2>
            <p className="text-gray-600 mb-6">View and manage waiting clients.</p>
            <Link
              to="/queue"
              className="bg-blue-900 text-white px-5 py-2 rounded-md font-semibold hover:bg-blue-800 transition"
            >
              VIEW QUEUE
            </Link>
          </div>

          {/* Food Intake */}
          <div className="bg-white rounded-xl shadow p-8 text-center flex flex-col items-center">
            <div className="text-5xl mb-4">📦</div>
            <h2 className="text-lg font-semibold mb-1">Food Donation Intake</h2>
            <p className="text-gray-600 mb-6">Track donated items.</p>
            <Link
              to="/intake"
              className="bg-blue-900 text-white px-5 py-2 rounded-md font-semibold hover:bg-blue-800 transition"
            >
              RECORD DONATIONS
            </Link>
          </div>

          {/* Client List */}
          <div className="bg-white rounded-xl shadow p-8 text-center flex flex-col items-center">
            <div className="text-5xl mb-4">👥</div>
            <h2 className="text-lg font-semibold mb-1">Client Directory</h2>
            <p className="text-gray-600 mb-6">View or manage all clients.</p>
            <Link
              to="/clients"
              className="bg-blue-900 text-white px-5 py-2 rounded-md font-semibold hover:bg-blue-800 transition"
            >
              VIEW CLIENTS
            </Link>
          </div>

          {/* Dashboard */}
          <div className="bg-white rounded-xl shadow p-8 text-center flex flex-col items-center">
            <div className="text-5xl mb-4">📊</div>
            <h2 className="text-lg font-semibold mb-1">Reports Dashboard</h2>
            <p className="text-gray-600 mb-6">View pantry analytics.</p>
            <Link
              to="/dashboard"
              className="bg-blue-900 text-white px-5 py-2 rounded-md font-semibold hover:bg-blue-800 transition"
            >
              ACCESS REPORTS
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
