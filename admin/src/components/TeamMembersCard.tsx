import { membersData } from "@/libs/teamsData";
import ViewAllBtn from "./ViewAllBtn";
import Image from "next/image";

export default function TeamMembersCard() {
  const activeMembers = membersData.filter((member)=>member.status === "active");
  return (
    <div className="w-full p-6 white-bg border border-gray-300 rounded-xl">
      <div className="flex-center-between mb-4">
        <h4 className="font-bold text-lg">Team Members</h4>
        <ViewAllBtn btnName="View all" url="/dashboard/teams" />
      </div>

      <div className="space-y-4 mt-6">
        {
          activeMembers.map((member,idx)=>(
            <div key={idx} className="w-full flex-center-between">
              <div className="flex-center gap-4">
                <div className="w-13 h-13 rounded-full relative overflow-hidden">
                  <Image
                    src={member.img}
                    alt={`Team member - ${member.name}`}
                    fill
                    sizes="60px"
                    className="object-cover"
                  />
                </div>

                <div>
                  <h5 className="text-sm font-semibold">{member.name}</h5>
                  <p className="text-xs text-gray-500">{member.title}</p>
                </div>
              </div>
              <span className="text-xs font-medium bg-green-50 text-green-500 px-3 py-1 rounded-full capitalize">{member.status}</span>
            </div>
          ))
        }
      </div>
    </div>
  );
}
