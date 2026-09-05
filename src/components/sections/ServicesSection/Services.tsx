import StackCard from "@/components/animations/StackCard";
import ServiceCard from "./ServiceCard";
import { services } from "@/libs/servicesData";


export default function Services() {
  return (
    <div className="w-full">
      <StackCard>
        <div className="cards space-y-50">
          {services.map((service, idx) => (
            <ServiceCard key={idx} service={service} reverse={idx % 2 !== 0} />
          ))}
        </div>
      </StackCard>
    </div>
  );
}
