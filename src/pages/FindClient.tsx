import { useState } from "react";
import Button from "../components/Button";
import { supabase } from "../supabase/client";

interface Client {
  id: string;
  first_name: string;
  last_name: string;
  phone: string | null;
  email?: string | null;
  household_size?: number | null;
}

export default function FindClient() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<Client[]>([]);
  const [loading, setLoading] = useState(false);
  const [confirmation, setConfirmation] = useState<string | null>(null);
  const [error, setError] = useState("");

  // --------------------------
  // SEARCH CLIENTS
  // --------------------------
  const handleSearch = async () => {
    setError("");
    setLoading(true);

    if (!search.trim()) {
      setError("Please enter a phone number or last name.");
      setLoading(false);
      return;
    }

    const { data, error: queryError } = await supabase
      .from("clients")
      .select("*")
      .or(
        `last_name.ilike.%${search}%,phone.ilike.%${search}%`
      )
      .limit(20);

    if (queryError) {
      setError("Something went wrong while searching for clients.");
      setLoading(false);
      return;
    }

    setResults((data as Client[]) || []);
    setLoading(false);
  };

  // --------------------------
  // ADD TO QUEUE
  // --------------------------
  const addToQueue = async (client: Client) => {
    setLoading(true);
    setError("");

    const { error: queueError } = await supabase.from("client_queue").insert({
      client_id: client.id,
      status: "waiting",
    });

    if (queueError) {
      setError("Unable to check in this client. Please try again.");
      setLoading(false);
      return;
    }

    setConfirmation(`${client.first_name} ${client.last_name}`);
    setLoading(false);
  };

  // --------------------------
  // CONFIRMATION SCREEN
  // --------------------------
  if (confirmation) {
    return (
      <div className="p-8 text-center max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-4">You're Checked In!</h1>
        <p className="text-gray-700 mb-6">
          Thank you, {confirmation}.  
          Please pull forward — a volunteer will assist you shortly.
        </p>

        <Button type="button" onClick={() => window.location.href = "/checkin"}>
          Done
        </Button>
      </div>
    );
  }

  // --------------------------
  // MAIN SEARCH UI
  // --------------------------
  return (
    <div className="p-8 max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Find Your Profile</h2>

      <p className="text-gray-600 mb-4">
        Search by phone number or last name.
      </p>

      <input
        className="border rounded-md p-3 w-full mb-4"
        placeholder="Enter phone or last name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {error && <p className="text-red-600 mb-4">{error}</p>}

      <Button type="button" onClick={handleSearch} disabled={loading}>
        {loading ? "Searching..." : "Search"}
      </Button>

      {/* RESULTS */}
      {results.length > 0 && (
        <div className="mt-6 space-y-3">
          <h3 className="text-lg font-semibold">Select Your Name:</h3>

          {results.map((client) => (
            <div
              key={client.id}
              className="border p-3 rounded-md flex justify-between items-center bg-white shadow-sm"
            >
              <div>
                <p className="font-medium">
                  {client.first_name} {client.last_name}
                </p>
                <p className="text-gray-600 text-sm">{client.phone}</p>
              </div>

              <Button type="button" onClick={() => addToQueue(client)}>
                Check In
              </Button>
            </div>
          ))}
        </div>
      )}

      {results.length === 0 && search.length > 2 && !loading && (
        <p className="mt-4 text-gray-600">
          No matching clients found.  
          Try another search or choose "I'm New Here."
        </p>
      )}
    </div>
  );
}
