import Button from "../components/Button";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-full px-4">
      <div className="bg-white shadow-md rounded-lg p-10 max-w-xl w-full text-center">
        <h1 className="text-3xl font-bold mb-4">Food Pantry System</h1>
        <p className="text-gray-600 mb-8">
          Welcome to your pantry management hub. Choose a section to get started.
        </p>

        <div className="space-y-3">

          <a href="/dashboard">
            <Button type="button">📊 Go to Dashboard</Button>
          </a>

          <a href="/clients">
            <Button type="button">👥 View All Clients</Button>
          </a>

          <a href="/checkin">
            <Button type="button">🧾 Client Check-In</Button>
          </a>

          <a href="/intake">
            <Button type="button">📦 Food Intake</Button>
          </a>

        </div>
      </div>
    </div>
  );
}
