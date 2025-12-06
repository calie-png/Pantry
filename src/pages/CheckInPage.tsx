import { useState } from "react";
import { supabase } from "../supabase/client";
import Button from "../components/Button";

export default function CheckInPage() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [message, setMessage] = useState("");

  const [selectedClient, setSelectedClient] = useState<any>(null);
  const [householdSize, setHouseholdSize] = useState("");

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

  // Open modal for household size
  const startCheckIn = (client: any) => {
    setSelectedClient(client);
    setHouseholdSize("");
  };

  // Confirm check-in
  const confirmCheckIn = async () => {
    if (!householdSize || Number(householdSize) < 1) {
      setMessage("❌ Household size must be at least 1.");
      return;
    }

    const { error } = await supabase.from("checkins").insert([
      {
        client_id: selectedClient.id,
        household_size: Number(householdSize),
      },
    ]);

    if (error) {
      console.error(error);
      setMessage("❌ Error checking in client.");
      return;
    }

    setMessage("✅ Client checked in successfully!");
    setSelectedClient(null);
    setHouseholdSize("");
    setResults([]);
    setSearch("");
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Client Check-In</h1>

      {/* Search */}
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

      {/* Results */}
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

              <Button type="button" onClick={() => startCheckIn(client)}>
                Check In
              </Button>
            </div>
          ))}
        </div>
      )}

      {/* Success/Error Message */}
      {message && (
        <p className="mt-6 text-center font-semibold text-green-700">
          {message}
        </p>
      )}

      {/* Household Size Modal */}
      {selectedClient && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow max-w-sm w-full">
            <h2 className="text-xl font-bold mb-4">
              Check In: {selectedClient.first_name} {selectedClient.last_name}
            </h2>

            <label className="block font-semibold mb-1">
              Household Size (Required)
            </label>
            <input
              type="number"
              min="1"
              value={householdSize}
              onChange={(e) => setHouseholdSize(e.target.value)}
              className="w-full border rounded p-2 mb-4"
              required
            />

            <div className="flex justify-between">
              <Button type="button" onClick={confirmCheckIn}>
                Confirm
              </Button>

              <Button
                type="button"
                onClick={() => setSelectedClient(null)}
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
