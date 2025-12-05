return (
  <div className="page-container">
    <div className="card">
      <h1 className="page-title">Pantry Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card">
          <h2 className="text-xl font-semibold">Families Served Today</h2>
          <p className="text-3xl mt-2">0</p>
        </div>

        <div className="card">
          <h2 className="text-xl font-semibold">Individuals Served</h2>
          <p className="text-3xl mt-2">0</p>
        </div>

        <div className="card">
          <h2 className="text-xl font-semibold">Pounds Distributed</h2>
          <p className="text-3xl mt-2">0 lbs</p>
        </div>

        <div className="card">
          <h2 className="text-xl font-semibold">Avg Wait Time</h2>
          <p className="text-3xl mt-2">0 min</p>
        </div>
      </div>

      {/* Queue */}
      <div className="card mt-8">
        <h2 className="text-xl font-semibold mb-2">Client Queue</h2>
        <p className="text-gray-600">No one is currently in line.</p>
      </div>
    </div>
  </div>
);
