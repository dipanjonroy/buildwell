import { TeamProp } from "@/libs/teamsData";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";

export default function TeamCard({
  memberDetails,
}: {
  memberDetails: TeamProp;
}) {
  return (
    <div className="group w-full rounded-2xl overflow-hidden border border-gray-200 shadow-xl">
      <div className="relative w-full min-h-70 overflow-hidden">
        <Image
          src={memberDetails.img}
          alt={memberDetails.name}
          fill
          className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-120"
          sizes="(max-width:768px) 100vw, 50vw"
        />
      </div>

      <div className="px-6 py-8">
        <h3 className="heading font-bold text-xl lg:text-2xl">
          {memberDetails.name}
        </h3>
        <p className="text-xs lg:text-sm">{memberDetails.title}</p>

        <div className="flex items-center gap-3 mt-5  text-sm lg:text-base">
          <span className="font-semibold">View Details</span>
          <GoArrowRight className="text-sm transition-transform group-hover:-rotate-45 duration-300 ease-in-out" />
        </div>
      </div>
    </div>
  );
}
