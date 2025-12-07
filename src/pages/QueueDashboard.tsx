import { useEffect, useState } from "react";
import { supabase } from "../supabase/client";
import Button from "../components/Button";

interface QueueEntry {
  id: string;
  client_id: string;
  status: "waiting" | "assigned_box" | "served" | "cancelled";
  created_at: string;
  clients: {
    first_name: string;
    last_name: string;
    phone: string | null;
    household_size: number | null;
  };
}

export default function QueueDashboard() {
  const [queue, setQueue] = useState<QueueEntry[]>([]);
  const [loading, setLoading] = useState(true);

  // -----------------------------
  // FETCH ACTIVE QUEUE
  // -----------------------------
  const loadQueue = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("client_queue")
      .select(
        `id, client_id, status, created_at,
         clients (
           first_name,
           last_name,
           phone,
           household_size
         )`
      )
      .eq("status", "waiting")
      .order("created_at", { ascending: true });

    if (!error && data) {
      setQueue(data as QueueEntry[]);
    }

    setLoading(false);
  };

  useEffect(() => {
    loadQueue();
  }, []);

  // -----------------------------
  // MARK AS SERVED
  // -----------------------------
  const markServed = async (id: string) => {
    await supabase
      .from("client_queue")
      .update({ status: "served" })
      .eq("id", id);

    loadQueue();
  };

  // -----------------------------
  // ASSIGN BOX (placeholder)
  // -----------------------------
  const assignBox = async (id: string) => {
    await supabase
      .from("client_queue")
      .update({ status: "assigned_box" })
      .eq("id", id);

    loadQueue();
  };

  // -----------------------------
  // UI
  // -----------------------------
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Queue Dashboard</h1>

      {loading ? (
        <p>Loading queue...</p>
      ) : queue.length === 0 ? (
        <div className="text-gray-600">No clients currently waiting.</div>
      ) : (
        <div className="space-y-4">
          {queue.map((entry) => {
            const waitMinutes = Math.floor(
              (Date.now() - new Date(entry.created_at).getTime()) / 60000
            );

            return (
              <div
                key={entry.id}
                className="border bg-white shadow rounded p-4 flex justify-between items-center"
              >
                <div>
                  <h2 className="text-xl font-semibold">
                    {entry.clients.first_name} {entry.clients.last_name}
                  </h2>

                  <p className="text-gray-600">
                    Household Size: {entry.clients.household_size || "—"}
                  </p>

                  <p className="text-gray-600">
                    Waiting: {waitMinutes} min
                  </p>
                </div>

                <div className="space-x-2">
                  <Button type="button" onClick={() => assignBox(entry.id)}>
                    Assign Box
                  </Button>

                  <Button type="button" onClick={() => markServed(entry.id)}>
                    Mark Served
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

