interface StatsCardProps {
  title: string;
  value: string;
}

export default function StatsCard({
  title,
  value,
}: StatsCardProps) {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-lg font-semibold">
        {title}
      </h2>

      <p className="text-4xl font-bold mt-4">
        {value}
      </p>
    </div>
  );
}