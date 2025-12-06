import { useState } from "react";
import { supabase } from "../supabase/client";

export default function IntakePage() {
  const [source, setSource] = useState("");
  const [pounds, setPounds] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    const { error } = await supabase.from("intake").insert([
      {
        source,
        pounds: Number(pounds),
      },
    ]);

    if (error) {
      console.error(error);
      setMessage("❌ Error saving intake record.");
      return;
    }

    setMessage("✅ Intake recorded successfully!");
    setSource("");
    setPounds("");
  };

  return (
    <div className="min-h-screen bg-taupe-light-100 p-8 flex items-center justify-center">
      <div className="max-w-lg w-full bg-white shadow-md rounded-lg p-8">
        <h1 className="text-2xl font-bold mb-4">Food Intake Log</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold mb-1">Source</label>
            <input
              type="text"
              value={source}
              onChange={(e) => setSource(e.target.value)}
              placeholder="Example: Publix, Atlanta Community Food Bank"
              className="w-full border rounded p-2"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Pounds of Food</label>
            <input
              type="number"
              value={pounds}
              onChange={(e) => setPounds(e.target.value)}
              min="1"
              className="w-full border rounded p-2"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Submit Intake
          </button>
        </form>

        {message && (
          <p className="mt-4 text-center font-semibold text-green-700">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
