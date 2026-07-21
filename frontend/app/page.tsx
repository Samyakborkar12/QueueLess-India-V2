import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center gap-6">

      <h1 className="text-6xl font-bold">
        QueueLess India V2
      </h1>

      <p className="text-lg text-gray-600">
        Smart Digital Queue Management System
      </p>

      <div className="flex gap-4">

        <Link
          href="/login"
          className="bg-black text-white px-5 py-3 rounded-lg"
        >
          Login
        </Link>

        <Link
          href="/register"
          className="border px-5 py-3 rounded-lg"
        >
          Register
        </Link>

        <Link
          href="/dashboard"
          className="bg-blue-600 text-white px-5 py-3 rounded-lg"
        >
          Dashboard
        </Link>

      </div>

    </main>
  );
}
