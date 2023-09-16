import React, { useMemo } from "react";
import DataTableRow from "./DataTableRow";

const DataTable = ({ setChartView, allData, selectItem, loading }) => {

    const totlaReach = useMemo(() => {
        const reachArray = allData?.map((item) => Number(item?.reach.replaceAll(',', '')));
        console.log("reachArray", reachArray);
        return reachArray?.reduce(function(accumulator, currentValue) {
            return accumulator + currentValue;
          }, 0)
    },[allData]);

    const totlaImp = useMemo(() => {
        const impArray = allData?.map((item) => Number(item?.impressions.replaceAll(',', '')));
        return impArray?.reduce(function(accumulator, currentValue) {
            return accumulator + currentValue;
          }, 0)
    },[allData]);

    const totlaAmountSpent = useMemo(() => {
        const amountArray = allData?.map((item) => Number(item?.amount_spent.replaceAll('$', '')));
        return amountArray?.reduce(function(accumulator, currentValue) {
            return accumulator + currentValue;
          }, 0)
    },[allData]);

    return (
        <div className="relative overflow-auto max-h-dataTable">
            <div className="sticky top-0 bg-white border-t border-b border-solid border-gray-300 flex items-center z-50 w-max">
                <div className="sticky left-0 flex items-center z-50 bg-white">
                    <div className="relative min-w-[48px] h-12 flex items-center justify-center border-r border-solid border-gray-300">
                        <label>
                            <input type="checkbox" className="peer hidden"/>
                            <div className="w-6 h-6 border border-solid border-gray-300 rounded-md peer-checked:bg-gray-900"></div>
                        </label>
                    </div>
                    <div className="relative py-1.5 pl-2.5 pr-1.5 h-12 border-r border-solid border-gray-300 flex items-center min-w-[86px] max-w-[86px]">
                        <span className="text-sm font-bold text-[#1c1e21] font-robotoSans">Off / On</span>
                    </div>
                    <div className="relative py-1.5 pl-2.5 pr-1.5 h-12 border-r border-solid border-gray-300 flex items-center min-w-[320px] max-w-[320px]">
                        <span className="text-sm font-bold text-[#1461cc] font-robotoSans">Campaign</span>
                        <span className="w-4 h-4 bg-no-repeat inline-flex bg-[length:25px_2799px] bg-[0px_-1697px] bg-leftBar1"></span>
                        <span className="w-3 h-3 bg-no-repeat inline-flex bg-[length:25px_2799px] bg-[0px_-2695px] bg-leftBar1 absolute right-1.5 top-[17px]"></span>
                    </div>
                </div>
                <div className="bg-white relative py-1.5 pl-2.5 pr-1.5 h-12 border-r border-solid border-gray-300 flex items-center min-w-[200px] max-w-[200px]">
                    <span className="text-sm font-bold text-[#1c1e21] font-robotoSans">Delivery</span>
                    <span className="w-3 h-3 bg-no-repeat inline-flex bg-[length:25px_2799px] bg-[0px_-2695px] bg-leftBar1 absolute right-1.5 top-[17px]"></span>
                </div>
                <div className="bg-white relative py-1.5 pl-2.5 pr-1.5 h-12 border-r border-solid border-gray-300 flex items-center min-w-[134px] max-w-[134px]">
                    <span className="text-sm font-bold text-[#1c1e21] font-robotoSans">Bid strategy</span>
                </div>
                <div className="bg-white relative py-1.5 pl-2.5 pr-1.5 h-12 border-r border-solid border-gray-300 flex items-center min-w-[134px] max-w-[134px]">
                    <span className="text-sm font-bold text-[#1c1e21] font-robotoSans">Budget</span>
                </div>
                <div className="bg-white relative py-1.5 pl-2.5 pr-1.5 h-12 border-r border-solid border-gray-300 flex items-center min-w-[120px] max-w-[120px]">
                    <span className="text-sm font-bold text-[#1c1e21] font-robotoSans leading-4">Attribution setting</span>
                </div>
                <div className="bg-white relative py-1.5 pl-2.5 pr-1.5 h-12 border-r border-solid border-gray-300 flex items-center min-w-[146px] max-w-[146px]">
                    <span className="w-3 h-3 bg-no-repeat inline-flex bg-[length:601px_8736px] bg-[-588px_-2103px] bg-iconImg7 mr-2"></span>
                    <span className="text-sm font-bold text-[#1c1e21] font-robotoSans">Results</span>
                    <span className="w-3 h-3 bg-no-repeat inline-flex bg-[length:25px_2799px] bg-[0px_-2695px] bg-leftBar1 absolute right-1.5 top-[17px]"></span>
                </div>
                <div className="bg-white relative py-1.5 pl-2.5 pr-1.5 h-12 border-r border-solid border-gray-300 flex items-center min-w-[146px] max-w-[146px]">
                    <span className="text-sm font-bold text-[#1c1e21] font-robotoSans">Reach</span>
                    <span className="w-3 h-3 bg-no-repeat inline-flex bg-[length:25px_2799px] bg-[0px_-2695px] bg-leftBar1 absolute right-1.5 top-[17px]"></span>
                </div>
                <div className="bg-white relative py-1.5 pl-2.5 pr-1.5 h-12 border-r border-solid border-gray-300 flex items-center min-w-[146px] max-w-[146px]">
                    <span className="text-sm font-bold text-[#1c1e21] font-robotoSans">Impressions</span>
                    <span className="w-3 h-3 bg-no-repeat inline-flex bg-[length:25px_2799px] bg-[0px_-2695px] bg-leftBar1 absolute right-1.5 top-[17px]"></span>
                </div>
                <div className="bg-white relative py-1.5 pl-2.5 pr-1.5 h-12 border-r border-solid border-gray-300 flex items-center min-w-[146px] max-w-[146px]">
                    <span className="text-sm font-bold text-[#1c1e21] font-robotoSans">Cost per result</span>
                    <span className="w-3 h-3 bg-no-repeat inline-flex bg-[length:25px_2799px] bg-[0px_-2695px] bg-leftBar1 absolute right-1.5 top-[17px]"></span>
                </div>
                <div className="bg-white relative py-1.5 pl-2.5 pr-1.5 h-12 border-r border-solid border-gray-300 flex items-center min-w-[146px] max-w-[146px]">
                    <span className="text-sm font-bold text-[#1c1e21] font-robotoSans">Amount spent</span>
                    <span className="w-3 h-3 bg-no-repeat inline-flex bg-[length:25px_2799px] bg-[0px_-2695px] bg-leftBar1 absolute right-1.5 top-[17px]"></span>
                </div>
                <div className="bg-white relative py-1.5 pl-2.5 pr-1.5 h-12 border-r border-solid border-gray-300 flex items-center min-w-[113px] max-w-[113px]">
                    <span className="text-sm font-bold text-[#1c1e21] font-robotoSans">Ends</span>
                    <span className="w-3 h-3 bg-no-repeat inline-flex bg-[length:25px_2799px] bg-[0px_-2695px] bg-leftBar1 absolute right-1.5 top-[17px]"></span>
                </div>
            </div>
            {loading ? "Loading..." : allData?.length ? allData.map((item, index) => {
                if(index % 2) {
                    return <DataTableRow selectItem={selectItem} setChartView={setChartView} item={item} key={index} />
                } else {
                    return <DataTableRow selectItem={selectItem} setChartView={setChartView} item={item} key={index} className="!bg-gray-50" />
                }
            }) : ""}
            <div className="sticky bottom-2 bg-white border-t border-b border-solid border-gray-300 flex items-center z-50 w-max">
                <div className="sticky left-0 flex items-center z-50 bg-white">
                    <div className="relative min-w-[134px] h-12 flex items-center justify-center border-r border-solid border-gray-300 max-w-[134px] h-16"></div>
                    <div className="relative py-1.5 pl-2.5 pr-1.5 h-12 border-r border-solid border-gray-300 flex items-center min-w-[320px] max-w-[320px] h-16">
                        <span className="text-sm font-bold text-[#1c1e21] font-robotoSans">{`Result from ${allData?.length} campaigns`}</span>
                    </div>
                </div>
                <div className="bg-white relative py-1.5 pl-2.5 pr-1.5 border-r border-solid border-gray-300 flex items-center min-w-[468px] max-w-[200px] h-16">
                </div>
                <div className="bg-white relative py-1.5 pl-2.5 pr-1.5 border-r border-solid border-gray-300 flex items-center min-w-[120px] max-w-[120px] h-16">
                    <span className="text-sm font-bold text-[#1c1e21] font-robotoSans leading-4"></span>
                </div>
                <div className="bg-white relative py-1.5 pl-2.5 pr-1.5 border-r border-solid border-gray-300 flex items-center min-w-[146px] max-w-[146px] h-16">
                    <span className="text-sm font-bold text-[#1c1e21] font-robotoSans"></span>
                </div>
                <div className="bg-white relative py-1.5 pl-2.5 pr-1.5 border-r border-solid border-gray-300 flex items-center justify-end min-w-[146px] max-w-[146px] h-16">
                    <span className="text-sm font-bold text-[#1c1e21] font-robotoSans text-right">{totlaReach} <br /> <span className="text-[#0000008c]">Total reach</span></span>
                </div>
                <div className="bg-white relative py-1.5 pl-2.5 pr-1.5 border-r border-solid border-gray-300 flex items-center justify-end min-w-[146px] max-w-[146px] h-16">
                    <span className="text-sm font-bold text-[#1c1e21] font-robotoSans text-right">{totlaImp} <br /> <span className="text-[#0000008c]">Total</span></span>
                </div>
                <div className="bg-white relative py-1.5 pl-2.5 pr-1.5 border-r border-solid border-gray-300 flex items-center min-w-[146px] max-w-[146px] h-16">
                    <span className="text-sm font-bold text-[#1c1e21] font-robotoSans"></span>
                </div>
                <div className="bg-white relative py-1.5 pl-2.5 pr-1.5 border-r border-solid border-gray-300 flex items-center justify-end min-w-[146px] max-w-[146px] h-16">
                    <span className="text-sm font-bold text-[#1c1e21] font-robotoSans text-right">${totlaAmountSpent} <br /> <span className="text-[#0000008c]">Total spent</span></span>
                </div>
                <div className="bg-white relative py-1.5 pl-2.5 pr-1.5 border-r border-solid border-gray-300 flex items-center min-w-[113px] max-w-[113px] h-16">

                </div>
            </div>
            <div className="h-2 w-full bg-white z-50 sticky bottom-0"></div>
        </div>
    )
}

export default DataTable;