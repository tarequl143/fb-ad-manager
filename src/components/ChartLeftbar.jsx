import React from "react";

const ChartLeftbar = ({setChartView, isViewChartDetails, removeSelectedItem}) => {
    const closeChartView = () => {
        removeSelectedItem();
        setChartView(false);
    }
    return (
        <div className="w-11 bg-[#616162] h-screen pt-2 px-1 flex-col">
            <a href="#" className={`w-full h-9 flex items-center justify-center rounded mb-2 ${isViewChartDetails ? "bg-[#ffffff33]" : ""}`} onClick={closeChartView}>
                <span className={`w-4 h-4 bg-no-repeat inline-flex bg-[length:25px_2799px] bg-[0px_-2054px] bg-leftBar1 ${isViewChartDetails ? "!bg-[0px_-2071px]" : ""}`}></span>
            </a>
            <a href="https://adsmanager.facebook.com" className={`w-full h-9 flex items-center justify-center rounded mb-2 bg-[#ffffff33] ${isViewChartDetails ? "!bg-[#fffffff2]" : ""}`}>
                <span className={`w-4 h-4 bg-no-repeat inline-flex bg-[length:25px_2799px] bg-[0px_-1765px] bg-leftBar1 ${isViewChartDetails ? "!bg-[0px_-1731px]" : ""}`}></span>
            </a>
            <a href="https://adsmanager.facebook.com" className={`w-full h-9 flex items-center justify-center rounded mb-2 ${isViewChartDetails ? "bg-[#ffffff33]" : ""}`}>
                <span className={`w-4 h-4 bg-no-repeat inline-flex bg-[length:25px_2799px] bg-[0px_-2190px] bg-leftBar1 ${isViewChartDetails ? "!bg-[0px_-2207px]" : ""}`}></span>
            </a>
            <a href="https://adsmanager.facebook.com" className={`w-full h-9 flex items-center justify-center rounded ${isViewChartDetails ? "bg-[#ffffff33]" : ""}`}>
                <span className={`w-4 h-4 bg-no-repeat inline-flex bg-[length:25px_2799px] bg-[0px_-1952px] bg-leftBar1 ${isViewChartDetails ? "!bg-[0px_-1969px]" : ""}`}></span>
            </a>
        </div>
    )
}

export default ChartLeftbar;