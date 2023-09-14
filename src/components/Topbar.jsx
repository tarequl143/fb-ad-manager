import React from "react";
import {DotsThree} from "phosphor-react";

const Topbar = () => {
    return (
        <div className="w-full bg-transparent py-2 flex items-center justify-between">
            <div className="flex items-center">
                <h2 className="px-[5px] text-lg font-bold font-robotoSans leading-9">AdTheta Limited</h2>
                <div className="ml-2 w-[300px] h-9 flex items-center justify-between bg-white border border-solid border-gray-300 px-3 rounded-md">
                    <span className="text-sm truncate text-[rgba(0, 0, 0, 0.85)] font-robotoSans">#2168/BI Sportonic (3509208629391763)</span>
                    <span className="w-4 h-4 bg-no-repeat inline-flex bg-[length:33px_398px] bg-[0px_-381px] bg-iconImg2 ml-3"></span>
                </div>
            </div>
            <div className="flex items-center">
                <p className="font-normal mr-2 font-robotoSans leading-9 text-sm">Updated 26 minutes ago</p>
                <div className="w-10 h-9 flex items-center justify-center bg-[#0000000d] hover:bg-gray-300 ml-2 rounded-md cursor-pointer">
                    <span className="w-4 h-4 inline-flex bg-no-repeat bg-[length:25px_2799px] bg-[0px_-1714px] bg-leftBar1"></span>
                </div>
                <div className="py-2 px-4 bg-[#0000001a] ml-2 rounded-md cursor-not-allowed text-sm font-normal text-[#00000073] font-robotoSans">
                    Discard drafts
                </div>
                <div className="py-2 px-4 bg-[#0000001a] ml-2 rounded-md cursor-not-allowed text-sm font-normal text-[#00000073] font-robotoSans">
                    Review and publish
                </div>
                <div className="w-10 h-9 flex items-center justify-center bg-[#0000000d] hover:bg-gray-300 ml-2 rounded-md cursor-pointer">
                    <DotsThree size={20} weight="bold" className="text-gray-900" />
                </div>
            </div>
        </div>
    )
}

export default Topbar;