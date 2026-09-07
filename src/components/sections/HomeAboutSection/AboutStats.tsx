import Stat from "@/components/Stat";
import AboutCTA from "./AboutCTA";

export default function AboutStats() {
  return (
    <div className="w-full h-full flex flex-col md:flex-row-reverse xl:flex-col justify-between gap-8">
      <div className="grid grid-cols-2 content-start gap-x-22 gap-y-10">
        <Stat number={8} label="Years experience" suffix="+" />
        <Stat number={26} label="Projects completed" suffix="+" />
        <Stat number={16} label="Skilled Workers" />
        <Stat number={120} label="Client satisfaction" suffix="+" />
      </div>
      <AboutCTA />
    </div>
  );
}
