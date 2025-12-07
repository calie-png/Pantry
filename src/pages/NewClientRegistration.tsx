import { useState } from "react";
import { supabase } from "../supabase/client";
import Button from "../components/Button";

export default function NewClientRegistration() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [householdSize, setHouseholdSize] = useState<number | "">("");

  const [loading, setLoading] = useState(false);
  const [confirmation, setConfirmation] = useState<string | null>(null);
  const [error, setError] = useState("");

  // ------------------------------------------
  // HANDLE SUBMIT
  // ------------------------------------------
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Validate manually
    if (!firstName || !lastName || !phone) {
      setError("First name, last name, and phone number are required.");
      setLoading(false);
      return;
    }

    // INSERT CLIENT
    const { data: newClient, error: insertError } = await supabase
      .from("clients")
      .insert([
        {
          first_name: firstName,
          last_name: lastName,
          phone,
          email,
          household_size: householdSize === "" ? null : householdSize,
        },
      ])
      .select()
      .single();

    if (insertError || !newClient) {
      setError("Error creating client. Please try again.");
      setLoading(false);
      return;
    }

    // ADD TO QUEUE
    const { error: queueError } = await supabase
      .from("client_queue")
      .insert({
        client_id: newClient.id,
        status: "waiting",
      });

    if (queueError) {
      setError("Client created, but unable to add to queue.");
      setLoading(false);
      return;
    }

    setConfirmation(`${newClient.first_name} ${newClient.last_name}`);
    setLoading(false);
  };

  // ------------------------------------------
  // CONFIRMATION SCREEN
  // ------------------------------------------
  if (confirmation) {
    return (
      <div className="p-8 text-center max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-4">You're Checked In!</h1>
        <p className="text-gray-700 mb-6">
          Thank you, {confirmation}.  
          A volunteer will assist you shortly.
        </p>

        <Button type="button" onClick={() => (window.location.href = "/checkin")}>
          Done
        </Button>
      </div>
    );
  }

  // ------------------------------------------
  // REGISTRATION FORM UI
  // ------------------------------------------
  return (
    <div className="p-8 max-w-xl mx-auto bg-white shadow rounded-lg">
      <h2 className="text-2xl font-semibold mb-6">New Visitor Registration</h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label className="font-semibold block mb-1">First Name *</label>
          <input
            className="w-full border rounded p-2"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="font-semibold block mb-1">Last Name *</label>
          <input
            className="w-full border rounded p-2"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="font-semibold block mb-1">Phone *</label>
          <input
            className="w-full border rounded p-2"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Example: 7705551234"
            required
          />
        </div>

        <div>
          <label className="font-semibold block mb-1">Email (optional)</label>
          <input
            className="w-full border rounded p-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="email@example.com"
          />
        </div>

        <div>
          <label className="font-semibold block mb-1">
            Household Size (optional)
          </label>
          <input
            className="w-full border rounded p-2"
            type="number"
            min="1"
            value={householdSize}
            onChange={(e) =>
              setHouseholdSize(
                e.target.value === "" ? "" : Number(e.target.value)
              )
            }
          />
        </div>

        {error && <p className="text-red-600">{error}</p>}

        <Button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Register & Check In"}
        </Button>
      </form>
    </div>
  );
}
