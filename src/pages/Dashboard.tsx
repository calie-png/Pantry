export default function Dashboard() {
  return (
    <div className="p-6">
      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">

        <div className="bg-white shadow rounded p-4">
          <h3 className="text-gray-600 text-sm">Families Served Today</h3>
          <p className="text-3xl font-bold mt-2">0</p>
        </div>
        <div className="bg-white shadow rounded p-4">
          <h3 className="text-gray-600 text-sm">Individuals Served</h3>
          <p className="text-3xl font-bold mt-2">0</p>
        </div>
        <div className="bg-white shadow rounded p-4">
          <h3 className="text-gray-600 text-sm">Pounds Distributed</h3>
          <p className="text-3xl font-bold mt-2">0 lbs</p>
        </div>
        <div className="bg-white shadow rounded p-4">
          <h3 className="text-gray-600 text-sm">Avg Wait Time</h3>
          <p className="text-3xl font-bold mt-2">0 min</p>
        </div>
      </div>
      {/* Client Queue */}
      <div className="bg-white shadow rounded p-4">
        <h3 className="text-gray-600 text-sm mb-2">Client Queue</h3>
        <p>No one is currently in line.</p>
      </div>
    </div>
  );
}
