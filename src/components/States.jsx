import { CookingPot, Heater, ScrollText } from "lucide-react";
import React from "react";

const States = ({ticketTotal, taskTotal}) => {
  return (
    <div className="w-11/12 mx-auto py-10 grid grid-cols-1 items-center justify-between lg:grid-cols-2 gap-5 ">
     
      {/* total Cooking  */}
      <div className="border-4 border-amber-50 w-[708px] h-[250px] rounded-2xl  p-15 bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] "  >
        <div className="flex flex-col lg:flex-row items-center justify-between">
         
          <div className="text-xl text-center items-center justify-between mx-auto text-white">
            In Progress
            <h2 className="text-6xl font-bold">{ticketTotal}</h2>
          </div>
        </div>
      </div>
      {/* total Ready  */}
      <div className="border-4 w-[708px] h-[250px] rounded-2xl border-amber-50 p-15 bg-[linear-gradient(90deg,rgba(84,207,103.68,1),rgba(0,130,122.2,1)_100%)]">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          
          <div className="text-xl text-center items-center justify-between mx-auto text-white">
            Resolved
            <h2 className="text-6xl font-bold">{taskTotal}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default States;