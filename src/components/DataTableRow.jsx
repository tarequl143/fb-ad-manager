import React from "react";
import {ChartBar, PencilSimple, CopySimple, PushPin} from "phosphor-react";

const DataTableRow = ({ className, setChartView, selectItem, item }) => {
    const openChartView = () => {
        selectItem(item?.id);
        setChartView(true);
    }

    return (
        <div className={`group/table-row bg-white flex items-center w-max z-10 hover:!bg-gray-100 ${className ? className : ""}`}>
            <div className={`sticky left-0 flex items-center z-[1] bg-white group-hover/table-row:!bg-gray-100 ${className ? className : ""}`}>
                <div className="relative min-w-[48px] h-12 flex items-center justify-center border-r border-solid border-gray-300">
                    <label>
                        <input type="checkbox" className="peer hidden"/>
                        <div className="w-6 h-6 border border-solid border-gray-300 rounded-md peer-checked:bg-gray-900"></div>
                    </label>
                </div>
                <div className="relative py-1.5 pl-2.5 pr-1.5 h-12 border-r border-solid border-gray-300 flex items-center justify-center min-w-[86px] max-w-[86px]">
                    <span className="text-sm font-bold text-[#1c1e21] font-robotoSans inline-flex">
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" defaultChecked={!!item?.Off_On} />
                            <div className="w-9 h-6 bg-white border border-solid border-gray-300 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-[14px] peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-[#000000bf] after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-100 peer-checked:after:bg-blue-600"></div>
                        </label>
                    </span>
                </div>
                <div className="relative py-1.5 pl-2.5 pr-1.5 h-12 border-r border-solid border-gray-300 flex items-start flex-col min-w-[320px] max-w-[320px]">
                    <span className="text-sm font-medium text-[#1461cc] font-robotoSans">{item?.campaign_title}</span>
                    <span className="group-hover/table-row:flex items-center hidden">
                        <span className="inline-flex items-center text-[11px] mr-2 font-robotoSans cursor-pointer" onClick={openChartView}><span className="mr-0.5"><ChartBar size={12} weight="fill" /></span> View Charts</span>
                        <span className="inline-flex items-center text-[11px] mr-2 font-robotoSans cursor-pointer"><span className="mr-0.5"><PencilSimple size={12} weight="fill" /></span> Edit</span>
                        <span className="inline-flex items-center text-[11px] mr-2 font-robotoSans cursor-pointer"><span className="mr-0.5"><CopySimple size={12} weight="fill" /></span> Duplicate</span>
                        <span className="inline-flex items-center text-[11px] mr-2 font-robotoSans cursor-pointer"><span className="mr-0.5"><PushPin size={12} weight="fill" /></span> Pin</span>
                    </span>
                </div>
            </div>
            <div className={`relative py-1.5 pl-2.5 pr-1.5 h-12 border-r border-solid border-gray-300 flex items-center min-w-[200px] max-w-[200px]`}>
                <span className="text-sm font-normal text-[#0000008c] font-robotoSans">{item?.delivery === "Active" ? <><span className="w-2 h-2 rounded-full bg-green-500 mr-1 inline-flex"></span>{item?.delivery}</> : item?.delivery}</span>
            </div>
            <div className="relative py-1.5 pl-2.5 pr-1.5 h-12 border-r border-solid border-gray-300 flex items-center min-w-[134px] max-w-[134px]">
                <span className="text-sm font-normal text-[#1c1e21] font-robotoSans">{item?.bid_strategy}</span>
            </div>
            <div className="relative py-1.5 pl-2.5 pr-1.5 h-12 border-r border-solid border-gray-300 flex items-center min-w-[134px] max-w-[134px] justify-end">
                <span className="text-sm font-normal text-[#1c1e21] font-robotoSans text-right">{item?.budget} <br /> <span className="text-[#0000008c]">Daily</span></span>
            </div>
            <div className="relative py-1.5 pl-2.5 pr-1.5 h-12 border-r border-solid border-gray-300 flex items-center min-w-[120px] max-w-[120px]">
                <span className="text-sm font-normal text-[#1c1e21] font-robotoSans leading-4 truncate">{item?.attribution_setting}</span>
            </div>
            <div className="relative py-1.5 pl-2.5 pr-1.5 h-12 border-r border-solid border-gray-300 flex items-center min-w-[146px] max-w-[146px]">
                <span className="text-sm font-normal text-[#0000008c] font-robotoSans truncate">{item?.results || "_"}</span>
            </div>
            <div className="relative py-1.5 pl-2.5 pr-1.5 h-12 border-r border-solid border-gray-300 flex items-center min-w-[146px] max-w-[146px] justify-end">
                <span className="text-sm font-normal text-[#0000008c] font-robotoSans text-right">{ item?.reach || "_"}</span>
            </div>
            <div className="relative py-1.5 pl-2.5 pr-1.5 h-12 border-r border-solid border-gray-300 flex items-center min-w-[146px] max-w-[146px] justify-end">
                <span className="text-sm font-normal text-[#0000008c] font-robotoSans text-right">{ item?.impressions || "_"}</span>
            </div>
            <div className="relative py-1.5 pl-2.5 pr-1.5 h-12 border-r border-solid border-gray-300 flex items-center min-w-[146px] max-w-[146px] justify-end">
                <span className="text-sm font-normal text-[#0000008c] font-robotoSans text-right truncate">{item?.cost_per_result} <br /> <span className="text-[#0000008c]">{item?.messaging_type}</span></span>
            </div>
            <div className="relative py-1.5 pl-2.5 pr-1.5 h-12 border-r border-solid border-gray-300 flex items-center min-w-[146px] max-w-[146px] justify-end">
                <span className="text-sm font-normal text-[#1c1e21] font-robotoSans text-right">{item?.amount_spent}</span>
            </div>
            <div className="relative py-1.5 pl-2.5 pr-1.5 h-12 border-r border-solid border-gray-300 flex items-center min-w-[113px] max-w-[113px] justify-end">
                <span className="text-sm font-normal text-[#1c1e21] font-robotoSans text-right">{item?.ends}</span>
            </div>
        </div>
    )
}

export default DataTableRow;