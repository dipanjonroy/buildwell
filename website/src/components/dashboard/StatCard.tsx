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
      <div className="flex flex-col gap-1">
        <div className="w-8 h-8 rounded-full bg-gray-100 flex-center">
          <Icon size={16}/>
        </div>
        <span className="text-xs 2xl:text-sm font-medium text-gray-400">{label}</span>
        <span className="font-bold text-2xl tracking-tight">{number}</span>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <span className={`${trendColor} flex items-center font-semibold -ms-1`}>
            <TrendIcon size={18}/>
            <span className="text-sm">{change}%</span>
          </span>
          <span className="text-xs text-gray-400 shrink-0">{comparisonText}</span>
        </div>
      </div>
    </div>
  );
}
