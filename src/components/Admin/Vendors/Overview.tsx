import { HiUsers } from "react-icons/hi2";
import { FaCirclePlus } from "react-icons/fa6";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
// import { Vendors } from "@/types/admin";

export default function Overview(  ) {
  
  const statsData = [
    {
      id: "total-vendors",
      label: "Total Retail Shops",
      icon: HiUsers, // People icon representing vendors
      value: 1332 // data.total_vendors,
    },
    {
      id: "todays-remittance",
      label: "Today's Purchase",
      icon: FaCirclePlus, // Briefcase icon for remittance
      value: "3,560,000" // data.today_remittance,
    },
    {
      id: "total-remittance",
      label: "Total Purchase",
      icon: BsArrowUpRightCircleFill, // Money withdraw icon for total remittance
      value: "6,660,000,000" // data.total_remittance,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-[15px] lg:grid-cols-4 justify-between items-center font-satoshi ">
      {statsData.map((data) => (
        <div
          key={data.id}
          className={`
            flex-1 py-[15px] shadow-sm rounded-[8px] px-[20px]
            sm:px-0 sm:shadow-none sm:border-l sm:first:border-0 sm:nth-[3]:border-0 sm:pl-[20px] sm:py-[15px] sm:rounded-none
            lg:border-0 lg:border-l lg:first:border-0 lg:nth-[3]:border-l
          `}
        >
          <div className="space-y-[12px]">
            <div className="flex gap-1 items-center">
              <span className="p-[5px] bg-[#15221B33] rounded-full">
                <data.icon className="size-[15px]" />
              </span>
              <span className="">{data.label}</span>
            </div>
            <h2 className="text-[20px] text-primary font-[700]">
              {data.value}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
}
