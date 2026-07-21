import Navbar from "../../src/components/common/Navbar";
import Sidebar from "../../src/components/common/Sidebar";

import StatsCard from "../../src/components/dashboard/StatsCard";
import RecentQueues from "../../src/components/dashboard/RecentQueues";
import LiveTokenStatus from "../../src/components/dashboard/LiveTokenStatus";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-100">

      <Navbar />

      <div className="flex">

        <Sidebar />

        <main className="flex-1 p-8">

          <h1 className="text-4xl font-bold mb-8">
            Dashboard
          </h1>

          <div className="grid md:grid-cols-3 gap-6 mb-8">

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

          <div className="grid md:grid-cols-2 gap-6">

            <RecentQueues />

            <LiveTokenStatus />

          </div>

        </main>

      </div>

    </div>
  );
}