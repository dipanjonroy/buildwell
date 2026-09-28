import { RiShieldCheckLine } from "react-icons/ri";
import { RiShieldUserLine } from "react-icons/ri";
import { RiHandHeartLine } from "react-icons/ri";
import CauseCard from "./CauseCard";

const causeData = [
  {
    icon:RiShieldCheckLine,
    title: "Certified Experts",
    text: "Our certified team delivers quality workmanship with professionalism and precision."
  },
  {
    icon:RiShieldUserLine,
    title: "Fully Insured",
    text: "Your project is protected with comprehensive insurance for complete peace of mind."
  },
  {
    icon:RiHandHeartLine,
    title: "Worked Backed By Satisfaction",
    text: "We stand behind every project with a commitment to quality, reliability, and customer satisfaction."
  },
]

export default function Causes() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-6">
      {
        causeData.map((cause,idx)=>(
          <div className={idx < 2 ?"md:col-span-2" : "md:col-span-4"} key={idx}>
            <CauseCard details={cause}/>
          </div>
        ))
      }
    </div>
  );
}