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
        <div className="absolute inset-x-4 bottom-4 z-10 rounded-xl border border-white bg-white/20 p-4 backdrop-blur-sm lg:inset-x-6 lg:bottom-6 lg:p-6">
          <div className="flex-center-between">
            <div
              className={`w-full ${featured ? "max-w-50 lg:max-w-85 xl:max-w-110" : "max-w-50 lg:max-w-80"}`}
            >
              <span className="lg:h-8 relative overflow-hidden heading font-bold text-lg lg:text-xl flex items-center leading-tight lg:leading-normal">
                <h3 className="transition-transform lg:group-hover:-translate-y-full duration-300">
                  {details.title}
                </h3>
                <h3 className="hidden lg:block absolute left-0 top-0 transition-transform translate-y-full group-hover:translate-y-0 duration-300">
                  {details.title}
                </h3>
              </span>

              <p
                className={`base-para mt-2 leading-tight ${featured ? "hidden xl:block" : "hidden"}`}
              >
                {details.shortDesc}
              </p>
            </div>

            {/* Button */}
            <div className="w-10 h-10 black-bg rounded-full flex-center">
              <GoArrowRight className="white-text text-lg transition-transform group-hover:-rotate-45 duration-400 ease-in-out" />
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
