"use client";

import { services } from "@/libs/servicesData";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ServicesTab() {
  const pathName = usePathname();

  const slug = pathName.split("/").pop();

  return (
    <div className="w-full rounded-xl helper-bg overflow-hidden">
      <ul>
        {services.map((service, idx) => {
          const activeSlug = service?.url === slug;
          const isLast = idx === services.length - 1;
          return (
            <Link
              href={`/services/${service.url}`}
              key={idx}
              className={`${activeSlug ? "black-bg white-text" : "border-b border-gray-400 hover:bg-gray-200 transition-colors duration-200"} ${isLast ? "border-b-0" : ""} black-text px-8 py-5 block`}
            >
              {service.title}
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
