type ProjectInfoType = {
  clientName: string;
  location: string;
  size: string;
  year: string;
  status: string;
};

export default function ProjectInfo({
  clientName,
  location,
  size,
  year,
  status,
}: ProjectInfoType) {
  const info = [
    { key: "Client", value: clientName },
    { key: "Location", value: location },
    { key: "Size", value: size },
    { key: "Year", value: year },
    { key: "Status", value: status },
  ];
  return (
    <div className="w-full border border-gray-300 rounded-2xl p-6">
      <div className="w-full space-y-3">
        {info.map((item, idx) => (
          <div className="flex gap-1 font-semibold" key={idx}>
            <span className="w-20 tracking-tight text-gray-400">
              {item.key}:
            </span>
            <span className="tracking-tight">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
