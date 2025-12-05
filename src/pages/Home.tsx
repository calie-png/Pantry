import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-8 flex items-center justify-center">
      <div className="max-w-xl w-full bg-white shadow-md rounded-lg p-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Food Pantry System</h1>
        <p className="text-gray-600 mb-6">
          Welcome to your pantry management hub. Choose a section to get
          started.
        </p>

        <div className="space-y-4">
          <Link
            to="/dashboard"
            className="block bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Go to Dashboard
          </Link>

          <Link
            to="/clients"
            className="block bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            View All Clients
          </Link>

          <Link
            to="/check-in"
            className="block bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
          >
            Client Check-In
          </Link>

          <Link
            to="/intake"
            className="block bg-yellow-600 text-white py-2 rounded hover:bg-yellow-700 transition"
          >
            Food Intake Log
          </Link>
        </div>
      </div>
    </div>
  );
}
