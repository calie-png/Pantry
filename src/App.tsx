import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="page-container">
      <div className="card">
        <h1 className="page-title">Food Pantry System</h1>
        <p className="text-center mb-4">
          Welcome to your pantry management hub. Choose a section to get started.
        </p>

        <div className="flex flex-col items-center gap-3 text-center">
          <Link className="nav-link" to="/dashboard">📊 Go to Dashboard</Link>
          <Link className="nav-link" to="/clients">👥 View All Clients</Link>
          <Link className="nav-link" to="/check-in">📝 Client Check-In</Link>
        </div>
      </div>
    </div>
  );
}
