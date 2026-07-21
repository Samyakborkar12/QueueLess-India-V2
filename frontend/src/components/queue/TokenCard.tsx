interface TokenCardProps {
  tokenNumber: string;
}

export default function TokenCard({
  tokenNumber,
}: TokenCardProps) {
  return (
    <div className="bg-white shadow rounded-xl p-6">

      <h2 className="text-xl font-bold">
        Your Token
      </h2>

      <p className="text-5xl font-bold mt-4">
        {tokenNumber}
      </p>

    </div>
  );
}