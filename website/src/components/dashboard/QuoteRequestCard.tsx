import ViewAllBtn from "./ViewAllBtn";
import {FiCalendar} from "react-icons/fi";

export default function QuoteRequestCard() {
  return (
    <div className="w-full p-6 white-bg border border-gray-300 rounded-xl">
      <div className="flex-center-between mb-4">
        <h4 className="font-bold text-lg">Quote Requests</h4>
        <ViewAllBtn btnName="View all" url="/dashboard/quotes" />
      </div>

      <div>
        {
          Array.from({length:3}).map((_,idx)=>{
            const lastItem = idx === 2;
            return(
              <div key={idx} className={`flex-center-between ${lastItem ? "pt-3" : "py-3 border-b border-gray-300"}`}>
                <div className="flex-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex-center">
                    <FiCalendar size={14}/>
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-xs">New Kitchen Remodel Quote</span>
                    <span className="text-xs text-gray-400">Sep 15, 2026</span>
                  </div>
                </div>

                <span className="py-1 px-3 bg-blue-50 rounded-full text-xs text-blue-500 font-semibold">New</span>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}
