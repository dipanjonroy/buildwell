import { membersData } from "@/libs/teamsData";
import TeamCard from "./TeamCard";

export default function TeamMembers() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {membersData.map((member, idx) => (
        <TeamCard key={idx} memberDetails={member} />
      ))}
    </div>
  );
}
