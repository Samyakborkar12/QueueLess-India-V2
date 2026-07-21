import JoinQueueForm from "../../src/components/queue/JoinQueueForm";

export default function QueuePage() {
  return (
    <main className="min-h-screen bg-slate-100 p-8">

      <h1 className="text-4xl font-bold mb-6">
        Queue Management
      </h1>

      <JoinQueueForm />

    </main>
  );
}