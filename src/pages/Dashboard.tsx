import Layout from "../layout/Layout";

export default function Dashboard() {
  return (
    <Layout title="Pantry Dashboard">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

        {/* Families Served */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-sm text-gray-500">Families Served Today</h2>
          <p className="text-3xl font-semibold mt-2">0</p>
        </div>

        {/* Individuals Served */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-sm text-gray-500">Individuals Served</h2>
          <p className="text-3xl font-semibold mt-2">0</p>
        </div>

        {/* Pounds Distributed */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-sm text-gray-500">Pounds Distributed</h2>
          <p className="text-3xl font-semibold mt-2">0 lbs</p>
        </div>

        {/* Avg Wait Time */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-sm text-gray-500">Avg Wait Time</h2>
          <p className="text-3xl font-semibold mt-2">0 min</p>
        </div>
      </div>

      {/* Queue List */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Client Queue</h2>

        <p className="text-gray-600">No one is currently in line.</p>

        {/* Later we replace this with live data from Supabase */}
      </div>
    </Layout>
  );
}
