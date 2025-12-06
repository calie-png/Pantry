import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../supabase/client";
import Button from "../components/Button";

export default function ClientDetailsPage() {
  const { id } = useParams();
  const [client, setClient] = useState<any>(null);

  useEffect(() => {
    supabase
      .from("clients")
      .select("*")
      .eq("id", id)
      .single()
      .then(({ data }) => {
        setClient(data);
      });
  }, [id]);

  if (!client) {
    return (
      <div className="p-8">
        <p>Loading client...</p>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-xl mx-auto bg-white shadow rounded-lg">
      <h1 className="text-3xl font-bold mb-4">
        {client.first_name} {client.last_name}
      </h1>

      <div className="space-y-2 text-gray-700 mb-8">
        <p><strong>Phone:</strong> {client.phone || "—"}</p>
        <p><strong>Email:</strong> {client.email || "—"}</p>
        <p><strong>Client ID:</strong> {client.id}</p>
      </div>

      <a href="/clients">
        <Button type="button">⬅️ Back to Clients</Button>
      </a>
    </div>
  );
}
