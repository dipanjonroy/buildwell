import { ProjectType } from "@/libs/projectData";
import Image from "next/image";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

type ProjectCardType = {
  details: ProjectType;
  featured: boolean;
};

export default function ProjectCard({ details, featured }: ProjectCardType) {
  return (
    <Link href={`/projects/${details.slug}`} className="block group">
      <div className="w-full aspect-3/2 relative rounded-xl overflow-hidden">
        {/* Text */}
        <div className="absolute inset-x-4 bottom-4 z-10 rounded-xl border border-white bg-white/5 p-4 backdrop-blur-md lg:inset-x-6 lg:bottom-6 lg:p-6">
          <div className="flex-center-between gap-10">
            <div
              className={`flex-1 white-text`}
            >
              <span className="text-sm mb-2 block">{details.location}</span>
              <h3 className="heading font-bold text-lg xl:text-xl 2xl:text-2xl tracking-tight leading-tight xl:line-clamp-1">
                {details.title}
              </h3>

              <p
                className={`text-sm mt-2 tracking-tight leading-tight ${featured ? "hidden xl:block" : "hidden"} line-clamp-2`}
              >
                {details.shortDesc}
              </p>
            </div>

            {/* Button */}
            <div className="w-10 h-10 white-bg rounded-full flex-center">
              <GoArrowRight className="text-lg transition-transform group-hover:-rotate-45 duration-400 ease-in-out" />
            </div>
          </div>
        </div>

        {/* image */}
        <div className="w-full h-full absolute inset-0 trandition-transform group-hover:scale-120 duration-300 ease-in-out">
          <Image
            src={details?.img}
            alt={details?.title}
            fill
            sizes="(max-width:768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </Link>
  );
}
