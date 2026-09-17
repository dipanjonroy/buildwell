import { IconType } from "react-icons";

import { IoIosArrowRoundDown } from "react-icons/io";
import { IoIosArrowRoundUp } from "react-icons/io";
import { IoRemoveOutline } from "react-icons/io5";

type ShortInfoCardType = {
  icon: IconType;
  label: string;
  number: number | string;
  change: number;
  comparisonText: string;
  trend: "up" | "down" | "equal";
};

export default function StatCard({
  icon: Icon,
  label,
  number,
  change,
  comparisonText,
  trend,
}: ShortInfoCardType) {

  let TrendIcon;
  let trendColor;

  if(trend === "up"){
    TrendIcon = IoIosArrowRoundUp;
    trendColor = "text-green-500";
  } else if (trend === "down"){
    TrendIcon = IoIosArrowRoundDown;
    trendColor = "text-red-500";
  } else {
    TrendIcon = IoRemoveOutline;
    trendColor = "text-gray-700";
  }

  return (
    <div className="w-full white-bg border border-gray-300 rounded-xl p-6">
      <div className="flex flex-col gap-2">
        <div className="w-10 h-10 rounded-full bg-gray-200 flex-center">
          <Icon size={18}/>
        </div>
        <span className="text-sm tracking-tight">{label}</span>
        <span className="font-bold text-3xl tracking-tight">{number}</span>
        <div className="flex gap-8">
          <span className={`${trendColor} flex items-center font-semibold`}>
            <TrendIcon size={18}/>
            <span className="text-sm">{change}%</span>
          </span>
          <span className="text-xs text-gray-400">{comparisonText}</span>
        </div>
      </div>
    </div>
  );
}
