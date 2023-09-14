import React from "react";

const TableTab = () => {
    return (
        <div className="mx-1 bg-transparent flex items-baseline justify-between">
            <div className="flex items-center flex-1 bg-white relative shadow-[0_5px_5px_0_rgba(0,0,0,0.1)] px-3 mx-1 h-11 rounded-t-lg">
                <span className="w-6 h-6 bg-no-repeat inline-flex bg-[length:25px_2799px] bg-[0px_-50px] bg-leftBar1"></span>
                <span className="ml-2 font-robotoSans text-[#1461cc] text-base font-bold">Campaigns</span>
            </div>
            <div className="flex items-center flex-1 bg-[#ffffff99] shadow-[0_5px_5px_0_rgba(0,0,0,0.1)] relative px-3 mx-1 h-10 rounded-t-lg">
                <span className="w-5 h-5 bg-no-repeat inline-flex bg-[length:25px_2799px] bg-[0px_-921px] bg-leftBar1"></span>
                <span className="ml-2 font-robotoSans text-[#000000d9] text-base font-bold">Ad sets</span>
            </div>
            <div className="flex items-center flex-1 bg-[#ffffff99] shadow-[0_5px_5px_0_rgba(0,0,0,0.1)] relative px-3 mx-1 h-10 rounded-t-lg">
                <span className="w-5 h-5 bg-no-repeat inline-flex bg-[length:25px_2799px] bg-[0px_-900px] bg-leftBar1"></span>
                <span className="ml-2 font-robotoSans text-[#000000d9] text-base font-bold">Ads</span>
            </div>
        </div>
    )
}

export default TableTab;