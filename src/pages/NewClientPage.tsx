import { useState } from "react";
import { supabase } from "../supabase/client";
import Button from "../components/Button";

export default function NewClientPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    const { error } = await supabase.from("clients").insert([
      {
        first_name: firstName,
        last_name: lastName,
        phone,
        email,
      },
    ]);

    if (error) {
      console.error(error);
      setMessage("❌ Error adding client.");
      return;
    }

    setMessage("✅ Client added successfully!");

    setFirstName("");
    setLastName("");
    setPhone("");
    setEmail("");
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Add New Client</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold mb-1">First Name</label>
          <input
            type="text"
            className="w-full border rounded p-2"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Last Name</label>
          <input
            type="text"
            className="w-full border rounded p-2"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Phone</label>
          <input
            type="text"
            className="w-full border rounded p-2"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="111-222-3333"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Email</label>
          <input
            type="email"
            className="w-full border rounded p-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <Button type="submit">Save Client</Button>
      </form>

      {message && (
        <p className="mt-4 text-center font-semibold text-green-700">
          {message}
        </p>
      )}
    </div>
  );
}
