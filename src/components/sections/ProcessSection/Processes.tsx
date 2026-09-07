import ProcessCard from "./ProcessCard";

const processData = [
  {
    title: "Discovery & Scope",
    text: "We assess your site, review plans, and define project scope with safety protocols.",
  },
  {
    title: "Estimate & Timeline",
    text: "Transparent pricing breakdown with material costs and realistic scheduling milestones.",
  },
  {
    title: "Permits & Safe Plan",
    text: "Full compliance documentation, safety certifications, and permit acquisition handled.",
  },
  {
    title: "Build & QA",
    text: "Daily progress updates, quality checkpoints, and continuous safety monitoring.",
  },
  {
    title: "Final Walk-through",
    text: "Comprehensive inspection, documentation handoff, and warranty activation.",
  },
];

export default function Processes() {
  return (
    <div className="card-container w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
      {processData.map((process, idx) => (
        <ProcessCard key={idx} details={{ sl: idx + 1, ...process }} />
      ))}
    </div>
  );
}
