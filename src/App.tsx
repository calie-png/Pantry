import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-xl p-10 max-w-xl w-full text-center">

        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Food Pantry System
        </h1>

        <p className="text-gray-600 mb-8">
          Welcome to your pantry management hub. Choose a section to get started.
        </p>

        <div className="space-y-4">

          <Link
            to="/dashboard"
            className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
          >
            Go to Dashboard
          </Link>

          <Link
            to="/clients"
            className="block w-full bg-gray-800 hover:bg-black text-white font-semibold py-3 rounded-lg transition"
          >
            View All Clients
          </Link>

          <Link
            to="/checkin"
            className="block w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition"
          >
            Client Check-In
          </Link>

        </div>
      </div>
    </div>
  );
}
