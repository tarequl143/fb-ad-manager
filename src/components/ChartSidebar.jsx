import React from "react";
import { MagnifyingGlass, DotsThree, SquaresFour } from "phosphor-react";

const ChartSidebar = ({selectedItem, selectedMenuNo, updateSelectedManuNo}) => {
    return (
        <div className="w-[350px] border-r border-solid border-[#e9eaeb] h-screen">
            <div className="mb-3 w-full border-b border-solid border-[#e9eaeb]">
                <div className="relative py-1.5 px-3">
                    <MagnifyingGlass size={16} className="absolute left-6 top-1/2 -translate-y-1/2" />
                    <input type="search" placeholder="Search" className="w-full border border-solid border-[#e9eaeb] h-9 rounded-md pl-9 pr-3 outline-none" />
                </div>
            </div>
            <a href="#performance" className={`group w-full flex items-center justify-start pl-3 pr-2 relative h-[46px] ${selectedMenuNo === 1 ? "bg-[#edf5ff] border-l-[2px] border-solid border-[#1877f2]" : ""} `} onClick={() => updateSelectedManuNo(1)}>
                <span className="w-4 h-4 bg-no-repeat inline-flex bg-[length:22px_373px] bg-[0px_-32px] bg-iconImg6 mr-2"></span>
                <span className="text-[#606770] uppercase text-sm flex-1">{selectedItem?.campaign_title}</span>
                <span className="w-10 h-9 flex items-center justify-center hover:bg-gray-300 rounded-md cursor-pointer"><DotsThree size={28} weight="bold" className="text-gray-500 group-hover:text-gray-950" /></span>
            </a>
            <a href="#demographic" className={`group w-full flex items-center justify-start pl-3 pr-2 relative h-[46px] ${selectedMenuNo === 2 ? "bg-[#edf5ff] border-l-[2px] border-solid border-[#1877f2]" : ""}`}  onClick={() => updateSelectedManuNo(2)}>

                {selectedMenuNo === 2 ? <span className="w-[22px] h-[22px] inline-flex items-center justify-center mr-2 ml-4 text-blue-700"><SquaresFour size={22} /></span> : <span className="w-[22px] h-[22px] inline-flex items-center justify-center mr-2 ml-4 text-gray-500"><SquaresFour size={22} /></span>}

                <span className="text-[#606770] uppercase text-sm flex-1">{selectedItem?.ad_set_title}</span>
                <span className="w-10 h-9 flex items-center justify-center hover:bg-gray-300 rounded-md cursor-pointer"><DotsThree size={28} weight="bold" className="text-gray-500 group-hover:text-gray-950" /></span>
            </a>
            <a href="#add-preview" className={`group w-full flex items-center justify-start pl-3 pr-2 relative h-[46px] ${selectedMenuNo === 3 ? "bg-[#edf5ff] border-l-[2px] border-solid border-[#1877f2]" : ""}`}  onClick={() => updateSelectedManuNo(3)}>
            {selectedMenuNo === 3 ?
                <span className="w-4 h-4 bg-no-repeat inline-flex bg-[length:48px_882px] bg-[-1px_-548px] bg-iconImg8 mr-2 ml-8"></span>
             :
                <span className="w-4 h-4 bg-no-repeat inline-flex bg-[length:48px_882px] bg-[-17px_-548px] bg-iconImg8 mr-2 ml-8"></span>
             }
                <span className="text-[#606770] text-sm flex-1">{selectedItem?.ad_title}</span>
                <span className="w-10 h-9 flex items-center justify-center hover:bg-gray-300 rounded-md cursor-pointer"><DotsThree size={28} weight="bold" className="text-gray-500 group-hover:text-gray-950" /></span>
            </a>
        </div>
    )
}

export default ChartSidebar;