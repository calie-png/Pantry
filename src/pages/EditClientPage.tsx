import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../supabase/client";
import Button from "../components/Button";

export default function EditClientPage() {
  const { id } = useParams();
  const [client, setClient] = useState<any>(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    supabase
      .from("clients")
      .select("*")
      .eq("id", id)
      .single()
      .then(({ data }) => setClient(data));
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    const { error } = await supabase
      .from("clients")
      .update({
        first_name: client.first_name,
        last_name: client.last_name,
        phone: client.phone,
        email: client.email,
      })
      .eq("id", id);

    if (error) {
      console.error(error);
      setMessage("❌ Error updating client.");
      return;
    }

    setMessage("✅ Client updated successfully!");
  };

  if (!client) return <p className="p-8">Loading client...</p>;

  return (
    <div className="p-8 max-w-xl mx-auto bg-white shadow rounded-lg">
      <h1 className="text-3xl font-bold mb-6">Edit Client</h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* First Name */}
        <div>
          <label className="block font-semibold mb-1">First Name</label>
          <input
            type="text"
            className="w-full border rounded p-2"
            value={client.first_name}
            onChange={(e) =>
              setClient({ ...client, first_name: e.target.value })
            }
            required
          />
        </div>

        {/* Last Name */}
        <div>
          <label className="block font-semibold mb-1">Last Name</label>
          <input
            type="text"
            className="w-full border rounded p-2"
            value={client.last_name}
            onChange={(e) =>
              setClient({ ...client, last_name: e.target.value })
            }
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block font-semibold mb-1">Phone</label>
          <input
            type="text"
            className="w-full border rounded p-2"
            value={client.phone || ""}
            onChange={(e) =>
              setClient({ ...client, phone: e.target.value })
            }
          />
        </div>

        {/* Email */}
        <div>
          <label className="block font-semibold mb-1">Email</label>
          <input
            type="email"
            className="w-full border rounded p-2"
            value={client.email || ""}
            onChange={(e) =>
              setClient({ ...client, email: e.target.value })
            }
          />
        </div>

        {/* Submit Button */}
        <Button type="submit">Save Changes</Button>

        {message && (
          <p className="mt-4 text-center font-semibold">{message}</p>
        )}
      </form>
    </div>
  );
}
