import StatsCard from "../../src/components/dashboard/StatsCard";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-8">

      <h1 className="text-4xl font-bold mb-8">
        Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <StatsCard
          title="Active Queues"
          value={12}
        />

        <StatsCard
          title="Patients Waiting"
          value={146}
        />

        <StatsCard
          title="Today's Tokens"
          value={389}
        />

      </div>

    </main>
  );
}