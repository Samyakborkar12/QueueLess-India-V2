export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto p-6">

        <div className="mb-8">
          <h1 className="text-4xl font-bold">
            Dashboard
          </h1>

          <p className="text-slate-600 mt-2">
            Welcome to QueueLess India V2
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold">
              Active Token
            </h2>

            <p className="text-4xl font-bold mt-4">
              A-102
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold">
              Queue Position
            </h2>

            <p className="text-4xl font-bold mt-4">
              5
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold">
              Estimated Wait Time
            </h2>

            <p className="text-4xl font-bold mt-4">
              20 min
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}