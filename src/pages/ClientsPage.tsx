import { useEffect, useState } from "react";
import { supabase } from "../supabase/client";
import Button from "../components/Button";

export default function ClientsPage() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    supabase.from("clients").select("*").then(({ data }) => {
      setClients(data || []);
    });
  }, []);

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Client List</h1>

        <div className="w-40">
          <a href="/clients/new">
            <Button type="button">Add Client</Button>
          </a>
        </div>
      </div>

      <table className="w-full border-collapse bg-white shadow">
        <thead className="bg-gray-200 text-left">
          <tr>
            <th className="p-2 border">ID</th>
            <th className="p-2 border">First Name</th>
            <th className="p-2 border">Last Name</th>
            <th className="p-2 border">Phone</th>
            <th className="p-2 border">Email</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((c: any) => (
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
    </div>
  );
}
