interface QueueCardProps {
  hospitalName: string;
  department: string;
  currentToken: number;
}

export default function QueueCard({
  hospitalName,
  department,
  currentToken,
}: QueueCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-bold">
        {hospitalName}
      </h2>

      <p>{department}</p>

      <p className="mt-3">
        Current Token: {currentToken}
      </p>

      <button className="mt-4 bg-black text-white px-4 py-2 rounded">
        Join Queue
      </button>
    </div>
  );
}