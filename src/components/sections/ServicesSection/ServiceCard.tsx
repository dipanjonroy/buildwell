import Mainbutton from "@/components/ui/buttons/Mainbutton";
import Image from "next/image";
import { GoCheckCircle } from "react-icons/go";

type ServiceType = {
  service: {
    img: string;
    title: string;
    text: string;
    points: string[];
    url:string;
  };

  reverse: boolean;
};

export default function ServiceCard({ service, reverse }: ServiceType) {
  return (
    <div className="w-full helper-bg p-6 lg:p-8 2xl:p-10 rounded-2xl">
      <div
        className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} lg:items-center lg:justify-between gap-8 xl:gap-16`}
      >
        <div
          className="relative w-full lg:w-1/2 h-[clamp(18rem,75vw,28rem)] sm:h-[clamp(20rem,55vw,32rem)] lg:h-[clamp(24rem,34vw,40rem)] rounded-2xl overflow-hidden"
        >
          <Image
            src={service.img}
            alt={service.title}
            fill
            sizes="(max-width:768px) 100vw, 50vw"
            className="object-cover"
            loading="eager"
          />
        </div>

        <div className="w-full flex-1 space-y-5">
          <h3 className="heading text-2xl lg:text-3xl xl:text-4xl font-bold">
            {service.title}
          </h3>
          <p className="base-para w-full xl:max-w-110">{service.text}</p>
          <div className="mb-8">
            {service.points.slice(0,3).map((point, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <GoCheckCircle className="black-text" size={18} />
                <span className="base-para">{point}</span>
              </div>
            ))}
          </div>

          <Mainbutton variant="black" url={`/services/${service.url}`} btnName="View Details"/>
        </div>
      </div>
    </div>
  );
}
