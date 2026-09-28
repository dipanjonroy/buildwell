import { ServiceType } from "@/libs/servicesData";
import Image from "next/image";

export default function SmallServiceCard({service}:{service:ServiceType}) {
  return (
    <div className="relative w-full h-100 rounded-xl overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={service.img}
          alt={service.title}
          fill
          sizes="(max-width:768px) 100vw, 40vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}