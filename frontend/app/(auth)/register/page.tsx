import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-5">
      <h1 className="text-5xl font-bold">
        QueueLess India V2
      </h1>

      <p>
        Smart Digital Queue Management
      </p>

      <div className="flex gap-4">
        <Link
          href="/login"
          className="bg-black text-white px-5 py-3 rounded"
        >
          Login
        </Link>

        <Link
          href="/register"
          className="border px-5 py-3 rounded"
        >
          Register
        </Link>
      </div>
    </main>
  );
}