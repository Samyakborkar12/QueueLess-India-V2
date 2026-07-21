import QueueCard from "../../../src/components/queue/QueueCard";
export default function QueuePage() {
  return (
    <main className="min-h-screen p-6 bg-slate-50">

      <h1 className="text-4xl font-bold mb-6">
        Available Queues
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        <QueueCard
          hospitalName="City Hospital"
          department="General Medicine"
          currentToken={45}
        />

        <QueueCard
          hospitalName="Apollo Clinic"
          department="Dental"
          currentToken={12}
        />

      </div>

    </main>
  );
}