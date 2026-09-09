export default function ProjectInfo() {
  const info = [
    { key: "Client", value: "Joe Harington" },
    { key: "Location", value: "Pacific Shores, California, USA." },
    { key: "Size", value: "12000 sqft." },
    { key: "Year", value: "2024" },
    { key: "Status", value: "Completed" },
  ];
  return (
    <div className="w-full border border-gray-200 rounded-2xl p-6">
      <div className="w-full space-y-2">
        {info.map((item, idx) => (
          <div className="flex gap-1 font-semibold" key={idx}>
            <span className="w-20 tracking-tight text-gray-400">{item.key}:</span>
            <span className="tracking-tight">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
