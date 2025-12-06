import { useState } from "react";
import { supabase } from "../supabase/client";
import Button from "../components/Button";

export default function CheckInPage() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [message, setMessage] = useState("");

  // Search clients by name or phone
  const handleSearch = async () => {
    setMessage("");

    const { data } = await supabase
      .from("clients")
      .select("*")
      .or(
        `phone.ilike.%${search}%,first_name.ilike.%${search}%,last_name.ilike.%${search}%`
      );

    setResults(data || []);
  };

  // Check in a specific client
  const checkInClient = async (clientId: number) => {
    setMessage("");

    const { error } = await supabase
      .from("checkins")
      .insert([{ client_id: clientId }]);

    if (error) {
      console.error(error);
      setMessage("❌ Error checking in client.");
      return;
    }

    setMessage("✅ Client checked in successfully!");
    setResults([]);
    setSearch("");
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Client Check-In</h1>

      {/* Search Box */}
      <div className="space-y-4 mb-6">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name or phone"
          className="w-full border rounded p-2"
        />

        <Button type="button" onClick={handleSearch}>
          Search
        </Button>
      </div>

      {/* Search Results */}
      {results.length > 0 && (
        <div className="space-y-3">
          {results.map((client) => (
            <div
              key={client.id}
              className="p-4 border rounded bg-white shadow flex justify-between items-center"
            >
              <div>
                <p className="font-semibold">
                  {client.first_name} {client.last_name}
                </p>
                <p className="text-gray-600 text-sm">{client.phone}</p>
              </div>

              <Button type="button" onClick={() => checkInClient(client.id)}>
                Check In
              </Button>
            </div>
          ))}
        </div>
      )}

      {/* Message */}
      {message && (
        <p className="mt-6 text-center font-semibold text-green-700">
          {message}
        </p>
      )}
    </div>
  );
}
