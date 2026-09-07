import { IconType } from "react-icons";

type CauseCardType = {
  icon: IconType;
  title: string;
  text: string;
}

export default function CauseCard({details}:{details:CauseCardType}) {
  const Icon = details.icon;
  return (
    <div className="w-full helper-bg rounded-xl p-6">
      <div className="black-text space-y-3 lg:space-y-5">
        <Icon className="text-2xl lg:text-3xl"/>
        <h3 className="heading font-bold text-xl lg:text-2xl leading-none">{details.title}</h3>
        <p className="base-para leading-tight">{details.text}</p>
      </div>
    </div>
  );
}