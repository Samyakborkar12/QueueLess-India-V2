import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center">

      <h1 className="text-6xl font-bold">
        QueueLess India V2
      </h1>

      <p className="mt-4 text-slate-600">
        Smart Digital Queue Management Platform
      </p>

      <div className="flex gap-4 mt-8">

        <Link
          href="/login"
          className="px-6 py-3 bg-black text-white rounded-lg"
        >
          Login
        </Link>

        <Link
          href="/register"
          className="px-6 py-3 border rounded-lg"
        >
          Register
        </Link>

      </div>

    </main>
  );
}

