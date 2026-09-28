import { GrLocation } from "react-icons/gr";
import { GrMailOption } from "react-icons/gr";
import { GrPhone } from "react-icons/gr";

const MethodDetails = [
  {
    icon: GrLocation,
    title: "visit our office",
    addressOne: "1234 Wilshire Blvd, Suite",
    addressTwo: "101, Los Angeles, CA 90017",
  },
  {
    icon: GrMailOption,
    title: "send us an email",
    subTitle: "Need roofing help or a quote?",
    method: "support@buildwell.com",
  },
  {
    icon: GrPhone,
    title: "call for support",
    subTitle: "Speak directly with our team.",
    method: "+1 (123) 456-7890",
  },
];

export default function ContactMethodsGrid() {
  return (
    <div className="w-full grid grid-cols-1 gap-6 md:grid-cols-3">
      {MethodDetails.map((method, idx) => {
        const Icon = method.icon;
        return (
          <div
            key={idx}
            className="w-full p-8 rounded-xl white-bg border border-gray-300 hover:shadow-xl transition-shadow duration-200"
          >
            <div>
              <Icon className="text-3xl lg:text-4xl" />
              <h3 className="capitalize heading font-extrabold text-xl lg:text-2xl mt-6 tracking-tight">
                {method.title}
              </h3>
              <p
                className={`base-para tracking-tight font-medium mt-3 ${method.subTitle ? "text-gray-400" : ""}`}
              >
                {method.subTitle ?? method.addressOne}
              </p>
              <p className="base-para tracking-tight font-medium">
                {method.method ?? method.addressTwo}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
