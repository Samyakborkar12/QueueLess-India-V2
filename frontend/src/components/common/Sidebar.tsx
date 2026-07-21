import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen p-6">

      <h2 className="text-2xl font-bold mb-8">
        QueueLess
      </h2>

      <div className="flex flex-col gap-4">

        <Link href="/dashboard">
          Dashboard
        </Link>

        <Link href="/queue">
          Queue
        </Link>

        <Link href="/profile">
          Profile
        </Link>

        <Link href="/admin">
          Admin
        </Link>

      </div>

    </aside>
  );
}