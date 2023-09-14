import React from "react";
import { Plus } from "phosphor-react";

const TableTopbar = () => {
    return (
        <div className="relative w-full bg-white p-2 flex items-center justify-between rounded-t-lg">
            <div className="flex items-center">
                <div className="pl-3 pr-4 h-9 flex items-center justify-center bg-[#63be09] hover:bg-[#498d06] rounded-md cursor-pointer mr-2">
                    <Plus size={16} weight="bold" className="mr-2 text-white" /> <span className="text-sm text-white font-bold font-robotoSans">Create</span>
                </div>
                <div className="w-10 h-9 flex items-center justify-center bg-[#0000001a] rounded-l-md cursor-pointer">
                    <span className="w-4 opacity-50 h-4 bg-no-repeat inline-flex bg-[length:71px_303px] bg-[-34px_-222px] bg-iconImg3"></span>
                </div>
                <div className="w-10 h-9 flex items-center justify-center bg-[#0000001a] rounded-r-md cursor-pointer ml-1 mr-2">
                    <span className="w-4 opacity-70 h-4 bg-no-repeat inline-flex bg-[length:33px_398px] bg-[0px_-381px] bg-iconImg2"></span>
                </div>
                <div className="px-3 h-9 flex items-center justify-center bg-[#0000001a] rounded-l-md cursor-pointer">
                    <span className="w-4 opacity-50 h-4 bg-no-repeat inline-flex bg-[length:22px_373px] bg-[0px_-253px] bg-iconImg6"></span>
                    <span className="text-[#00000073] ml-2 text-sm font-normal font-robotoSans">Edit</span>
                </div>
                <div className="w-10 h-9 flex items-center justify-center bg-[#0000001a] rounded-r-md cursor-pointer ml-1 mr-2">
                    <span className="w-4 opacity-70 h-4 bg-no-repeat inline-flex bg-[length:33px_398px] bg-[0px_-381px] bg-iconImg2"></span>
                </div>
                <div className="pl-3 pr-4 h-9 flex items-center justify-center bg-[#0000000d] rounded-md cursor-pointer mr-2">
                    <span className="w-4 h-4 bg-no-repeat inline-flex bg-[length:25px_2799px] bg-[0px_-1782px] bg-leftBar1"></span>
                    <span className="text-gray-700 ml-2 text-sm font-normal font-robotoSans">A/B Test</span>
                </div>
                <div className="w-10 h-9 flex items-center justify-center bg-[#0000001a] rounded-md cursor-pointer mr-2">
                    <span className="w-4 opacity-50 h-4 bg-no-repeat inline-flex bg-[length:25px_2799px] bg-[0px_-2088px] bg-leftBar1"></span>
                </div>
                <div className="w-10 h-9 flex items-center justify-center bg-[#0000001a] rounded-l-md cursor-pointer">
                    <span className="w-4 opacity-50 h-4 bg-no-repeat inline-flex bg-[length:25px_2799px] bg-[0px_-2394px] bg-leftBar1"></span>
                </div>
                <div className="w-10 h-9 flex items-center justify-center bg-[#0000001a] cursor-pointer ml-1">
                    <span className="w-4 opacity-70 h-4 bg-no-repeat inline-flex bg-[length:25px_2799px] bg-[0px_-2309px] bg-leftBar1"></span>
                </div>
                <div className="w-10 h-9 flex items-center justify-center bg-[#0000000d] cursor-pointer ml-1">
                    <span className="w-5 h-5 bg-no-repeat inline-flex bg-[length:25px_2799px] bg-[0px_-1551px] bg-leftBar1"></span>
                </div>
                <div className="w-10 h-9 flex items-center justify-center bg-[#0000000d] rounded-r-md cursor-pointer ml-1 mr-2">
                    <span className="w-4 h-4 opacity-50 bg-no-repeat inline-flex bg-[length:25px_2799px] bg-[0px_-2292px] bg-leftBar1"></span>
                </div>
                <div className="pl-4 pr-3 h-9 flex items-center justify-center bg-[#0000000d] rounded-md cursor-pointer">
                    <span className="text-[#00000073] text-sm font-normal font-robotoSans">Rules</span>
                    <span className="w-4 ml-2 h-4 bg-no-repeat inline-flex bg-[length:33px_398px] bg-[0px_-381px] bg-iconImg2"></span>
                </div>
            </div>
            <div className="flex items-center">
                <div className="flex items-center">
                    <span className="text-sm text-[#000000cc] mr-2">View Setup</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" defaultChecked={false} />
                        <div className="w-9 h-6 bg-white border border-solid border-gray-300 rounded-full peer peer-checked:after:translate-x-[14px] peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-[#000000bf] after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-100 peer-checked:after:bg-blue-600"></div>
                    </label>
                </div>
                <div className="px-3 h-9 flex items-center justify-center bg-[#0000000d] rounded-md cursor-pointer ml-2">
                    <span className="w-4 h-4 bg-no-repeat inline-flex bg-[length:25px_2799px] bg-[0px_-2003px] bg-leftBar1"></span>
                    <span className="w-4 ml-2 h-4 bg-no-repeat inline-flex bg-[length:33px_398px] bg-[0px_-381px] bg-iconImg2"></span>
                </div>
                <div className="px-3 h-9 flex items-center justify-center bg-[#0000000d] rounded-md cursor-pointer ml-2">
                    <span className="w-4 h-4 bg-no-repeat inline-flex bg-[length:25px_2799px] bg-[0px_-1629px] bg-leftBar1"></span>
                    <span className="w-4 ml-2 h-4 bg-no-repeat inline-flex bg-[length:33px_398px] bg-[0px_-381px] bg-iconImg2"></span>
                </div>
                <div className="pl-3 pr-4 h-9 flex items-center justify-center bg-[#0000000d] rounded-md cursor-pointer ml-4">
                    <span className="text-[#00000073] text-sm font-normal font-robotoSans">Reports</span>
                    <span className="w-4 ml-2 h-4 bg-no-repeat inline-flex bg-[length:33px_398px] bg-[0px_-381px] bg-iconImg2"></span>
                </div>
            </div>
        </div>
    )
}

export default TableTopbar;