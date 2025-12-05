export default function Home() {
  return (
    <div className="flex items-center justify-center h-full px-4">
      <div className="bg-white shadow-md rounded-lg p-10 max-w-xl w-full text-center">
        <h1 className="text-3xl font-bold mb-4">Food Pantry System</h1>
        <p className="text-gray-600 mb-8">
          Welcome to your pantry management hub. Choose a section to get started.
        </p>

        <div className="space-y-3">
          <a href="/dashboard" className="block text-blue-600 hover:underline">
            📊 Go to Dashboard
          </a>

          <a href="/clients" className="block text-blue-600 hover:underline">
            👥 View All Clients
          </a>

          <a href="/checkin" className="block text-blue-600 hover:underline">
            🧾 Client Check-In
          </a>

          <a href="/intake" className="block text-blue-600 hover:underline">
            📦 Food Intake
          </a>
        </div>
      </div>
    </div>
  );
}
