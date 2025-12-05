import { useEffect, useState } from "react";
import { supabase } from "../supabase/client";

interface ClientRecord {
  id: number;
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  created_at: string;
}

export default function App() {
  const [clients, setClients] = useState<ClientRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch clients from Supabase
  const loadClients = async () => {
    setLoading(true);
    const { data, error } = await supabase.from("clients").select("*");

    if (error) {
      console.error(error);
      setError("Could not load clients.");
      setLoading(false);
      return;
    }

    setClients(data || []);
    setLoading(false);
  };

  useEffect(() => {
    loadClients();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow rounded p-6">
        <h1 className="text-2xl font-bold mb-4">Food Pantry System</h1>

        {/* Loading State */}
        {loading && <p className="text-gray-600">Loading clients…</p>}

        {/* Error State */}
        {error && <p className="text-red-500">{error}</p>}

        {/* Client Table */}
        {!loading && !error && (
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-left bg-gray-200">
                <th className="p-2 border">ID</th>
                <th className="p-2 border">First Name</th>
                <th className="p-2 border">Last Name</th>
                <th className="p-2 border">Phone</th>
                <th className="p-2 border">Email</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((c) => (
                <tr key={c.id} className="border-t">
                  <td className="p-2 border">{c.id}</td>
                  <td className="p-2 border">{c.first_name}</td>
                  <td className="p-2 border">{c.last_name}</td>
                  <td className="p-2 border">{c.phone}</td>
                  <td className="p-2 border">{c.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {/* Refresh */}
        <button
          onClick={loadClients}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Refresh
        </button>
      </div>
    </div>
  );
}
