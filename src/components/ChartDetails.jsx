import React, { useEffect, useMemo, useState } from "react";
import { DotsThree, SquaresFour } from "phosphor-react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement,
  } from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import ChartLeftbar from "./ChartLeftbar"
import ChartSidebar from "./ChartSidebar"

const domainUrl = "https://facebook.edutrix.net/"

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const demoGraphicsLabels = ["13-17", "18-24", "25-34", "35-44", "45-54", "55-64", "65+"];
const platforLabels = ["Facebook", "Instagram", "Messenger", "Audience Network", "Oculus"];

const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false
        }
    },
};

const BarOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false
        }
    },
};



const ChartDetails = ({setChartView, isViewChartDetails, removeSelectedItem, selectedItem}) => {

    const [selectedMenuNo, setSelectedMenuNo] = useState(1);
    const [selectedChartTwo, setSelectedChartTwo] = useState("demographic");
    const [selectedChart, setSelectedChart] = useState("messaging");

    const updateSelectedManuNo = (value) => {
        setSelectedMenuNo(value || 1);
    }

    const getChartTitle = useMemo(() => {
        if(selectedChart === "perMessage") {
            return "Impressions";
        }
        if(selectedChart === "amount") {
            return "Amount spent";
        }
        return selectedItem?.messaging_type
    },[selectedChart, selectedItem?.messaging_type]);

    const getLabels = useMemo(() => {
        return selectedItem?.messages?.map((item) => `${monthNames[new Date(item?.date).getMonth()]} ${new Date(item?.date).getDate()}`);
    },[selectedItem?.messages]);

    const getData = useMemo(() => {
        return selectedItem?.messages?.map((item) => {
            if(selectedChart === "perMessage") {
                return item?.per_mess.replaceAll("$", "");
            }
            if(selectedChart === "amount") {
                return item?.amount_spent.replaceAll("$", "");
            }
            return item?.number;
        });
    },[selectedChart, selectedItem?.messages]);

    const data = useMemo(() => {
        return {
            labels: getLabels,
            datasets: [
                {
                data: getData,
                borderColor: '#32cdcd',
                backgroundColor: '#027a7a',
                },
            ],
        }
    },[getData, getLabels]);

    const demoGraphicData = useMemo(() => {
        return {
            labels: demoGraphicsLabels,
            datasets: [
                {
                    data: [selectedItem?.platform?.age_13_17_man, selectedItem?.platform?.age_18_24_man, selectedItem?.platform?.age_25_34_man, selectedItem?.platform?.age_35_44_man, selectedItem?.platform?.age_45_54_man, selectedItem?.platform?.age_55_64_man, selectedItem?.platform?.age_65_man],
                    borderColor: '#5c3bbf',
                    backgroundColor: '#5c3bbf',
                },
                {
                    data: [selectedItem?.platform?.age_13_17_women, selectedItem?.platform?.age_18_24_women, selectedItem?.platform?.age_25_34_women, selectedItem?.platform?.age_35_44_women, selectedItem?.platform?.age_45_54_women, selectedItem?.platform?.age_55_64_women, selectedItem?.platform?.age_65_women],
                    borderColor: '#32cdcd',
                    backgroundColor: '#32cdcd',
                }
            ],
        }
    },[getData, selectedItem?.platform]);

    const platformData = useMemo(() => {
        return {
            labels: platforLabels,
            datasets: [
                {
                    data: [selectedItem?.platform?.facebook_man, selectedItem?.platform?.instagram_man, selectedItem?.platform?.messenger_man, selectedItem?.platform?.audience_network_man, selectedItem?.platform?.oculus_man],
                    borderColor: '#5c3bbf',
                    backgroundColor: '#5c3bbf',
                },
                {
                    data: [selectedItem?.platform?.facebook_women, selectedItem?.platform?.instagram_women, selectedItem?.platform?.messenger_women, selectedItem?.platform?.audience_network_women, selectedItem?.platform?.oculus_women],
                    borderColor: '#32cdcd',
                    backgroundColor: '#32cdcd',
                }
            ],
        }
    },[getData, selectedItem?.platform]);

    return (
        <div className={`flex absolute z-[110] top-0 left-full -ml-11 ${isViewChartDetails ? "!left-0 !ml-0" : "" } w-full h-full bg-white`}>
            <ChartLeftbar setChartView={setChartView} removeSelectedItem={removeSelectedItem} isViewChartDetails={isViewChartDetails} />
            <ChartSidebar selectedMenuNo={selectedMenuNo} updateSelectedManuNo={updateSelectedManuNo} selectedItem={selectedItem} />
            <div className="flex-1 overflow-y-auto">
                <div className="w-full h-11 flex items-center justify-between bg-white px-3 border-b border-solid border-[#e9eaeb]">
                    <div className="inline-flex items-center justify-start">
                        <div className="w-10 min-w-[40px] h-9 bg-gray-100 rounded-lg inline-flex items-center justify-center mr-3">
                            <span className="w-4 h-4 bg-no-repeat inline-flex bg-[length:48px_882px] bg-[-17px_-752px] bg-iconImg8"></span>
                        </div>
                        <a href="#" className="inline-flex whitespace-nowrap items-center justify-start px-1 py-1 relative bg-blue-50 rounded-sm">
                            <span className="w-4 h-4 bg-no-repeat inline-flex bg-[length:22px_373px] bg-[0px_-32px] bg-iconImg6 mr-1"></span>
                            <span className="text-sm flex-1 text-blue-700 font-robotoSans lowercase">{selectedItem?.campaign_title}</span>
                        </a>
                        <a href="#" className="w-3 min-w-[12px] mx-2 inline-flex items-center justify-center">
                            <span className="w-3 h-3 bg-no-repeat inline-flex bg-[length:48px_882px] bg-[-34px_-729px] bg-iconImg8"></span>
                        </a>
                        <a href="#" className="flex w-max items-center justify-start px-1 py-1 relative">
                            <span className="w-[22px] h-[22px] inline-flex items-center justify-center mr-1 text-gray-500"><SquaresFour size={22} /></span>
                            <span className="text-[#606770] text-sm flex-1 font-robotoSans lowercase">{selectedItem?.ad_set_title}</span>
                        </a>
                        <a href="#" className="w-3 min-w-[12px] mx-2 inline-flex items-center justify-center">
                            <span className="w-3 h-3 bg-no-repeat inline-flex bg-[length:48px_882px] bg-[-34px_-729px] bg-iconImg8"></span>
                        </a>
                        <a href="#" className="flex w-max items-center justify-start px-1 py-1 relative">
                        <span className="w-4 h-4 bg-no-repeat inline-flex bg-[length:48px_882px] bg-[-17px_-548px] bg-iconImg8 mr-1"></span>
                            <span className="text-[#606770] text-sm flex-1 font-robotoSans lowercase">{selectedItem?.ad_title}</span>
                        </a>
                    </div>
                    <div className="inline-flex items-center justify-end">
                        <div className="flex items-center">
                            <span className="text-sm text-[#0000008c] leading-5 border-r border-solid border-[#0000008c] pr-3">{selectedItem?.delivery === "Active" ? <><span className="w-2 h-2 rounded-full bg-green-500 mr-1 inline-flex"></span>{selectedItem?.delivery}</> : selectedItem?.delivery}</span>
                            <label className="relative inline-flex items-center cursor-pointer ml-3">
                                <input type="checkbox" value="" className="sr-only peer" defaultChecked={selectedItem?.Off_On} />
                                <div className="w-9 h-6 bg-white border border-solid border-gray-300 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-[14px] peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-[#000000bf] after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-100 peer-checked:after:bg-blue-600"></div>
                            </label>
                        </div>
                        <div className="w-10 h-9 flex items-center justify-center bg-[#0000000d] hover:bg-gray-300 ml-2 rounded-md cursor-pointer">
                            <DotsThree size={20} weight="bold" className="text-gray-900" />
                        </div>
                    </div>
                </div>
                <div className="w-full h-[52px] flex items-center justify-end bg-white px-3 border-b border-solid border-[#e9eaeb]">
                    <div className="ml-1 w-[292px] h-9 flex items-center justify-between bg-[#0000000d] hover:bg-gray-300 px-4 rounded-md">
                        <span className="text-sm text-[#1c1e21] font-robotoSans flex-1">This month: Sep 1, 2023 – Sep 4, 2023</span>
                        <span className="w-4 h-4 bg-no-repeat inline-flex bg-[length:33px_398px] bg-[0px_-381px] bg-iconImg2 translate-x-1.5"></span>
                    </div>
                </div>
                <div className="px-6 py-8 bg-[#f2f2f2] flex flex-col">
                    <div className="bg-white px-4 pt-4 pb-8 rounded-md mb-2" id="performance">
                        <div className="flex items-center justify-between">
                            <h3 className="text-[16px] font-bold font-robotoSans">Performance overview</h3>
                            <div className="flex items-center">
                                <div className="inline-flex items-center h-9 px-3 bg-gray-100 font-robotoSans text-sm font-light rounded">
                                    Customize metrics
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between mt-5 gap-3">
                            <div className={`flex cursor-pointer flex-col flex-1 p-2 hover:shadow-md rounded-md ${selectedChart === "messaging" ? "border border-solid border-[#32cdcd]" : ""}`} onClick={() => setSelectedChart("messaging")}>
                                <h4 className="text-sm font-bold text-gray-900 font-robotoSans"><span>{selectedItem?.messaging_type}</span><span></span></h4>
                                <h2 className="text-[32px] font-normal text-gray-900 font-robotoSans leading-9">{selectedItem?.messaging}</h2>
                                <div className="flex items-center font-robotoSans">
                                    <span></span>
                                    <span>--</span>
                                </div>
                            </div>
                            <div className={`flex cursor-pointer flex-col flex-1 p-2 hover:shadow-md rounded-md ${selectedChart === "perMessage" ? "border border-solid border-[#32cdcd]" : ""}`} onClick={() => setSelectedChart("perMessage")}>
                                <h4 className="text-sm font-bold text-gray-900 font-robotoSans"><span>Impressions</span><span></span></h4>
                                <h2 className="text-[32px] font-normal text-gray-900 font-robotoSans leading-9">{selectedItem?.per_messaging}</h2>
                                <div className="flex items-center font-robotoSans">
                                    <span></span>
                                    <span>--</span>
                                </div>
                            </div>
                            <div className={`flex cursor-pointer flex-col flex-1 p-2 hover:shadow-md rounded-md ${selectedChart === "amount" ? "border border-solid border-[#32cdcd]" : ""}`} onClick={() => setSelectedChart("amount")}>
                                <h4 className="text-sm font-bold text-gray-900 font-robotoSans"><span>Amount Spent</span><span></span></h4>
                                <h2 className="text-[32px] font-normal text-gray-900 font-robotoSans leading-9">{selectedItem?.amount}</h2>
                                <div className="flex items-center font-robotoSans">
                                    <span></span>
                                    <span>--</span>
                                </div>
                            </div>
                        </div>
                        <h3 className="text-[16px] font-bold font-robotoSans my-3">{getChartTitle}</h3>
                        <div className="w-full h-[200px]">
                            <Line options={options} data={data} />
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-md mb-2" id="demographic">
                        <div className="flex items-center">
                            <div className={`group cursor-pointer inline-flex items-center justify-start px-3 mr-2 relative rounded-md h-[36px] hover:bg-gray-100 ${selectedChartTwo === "demographic" ? "bg-[#edf5ff] hover:!bg-blue-100" : ""}`} onClick={() => setSelectedChartTwo("demographic")}>
                                <span className={`w-4 h-4 bg-no-repeat inline-flex bg-[length:25px_627px] bg-[0px_-328px] bg-iconImg5 mr-3 ${selectedChartTwo === "demographic" ? "bg-[0px_-328px]" : "bg-[0px_-345px]"}`}></span>
                                <span className={`capitalize text-sm flex-1 ${selectedChartTwo === "demographic" ? "text-blue-700 font-bold" : ""} font-robotoSans`}>Demographics</span>
                            </div>
                            <div className={`group cursor-pointer inline-flex items-center justify-start px-3 mr-2 relative rounded-md h-[36px] hover:bg-gray-100 ${selectedChartTwo === "platform" ? "bg-[#edf5ff] hover:!bg-blue-100" : ""}`} onClick={() => setSelectedChartTwo("platform")}>
                                <span className={`w-4 h-4 bg-no-repeat inline-flex bg-[length:25px_627px] bg-iconImg5 mr-3 ${selectedChartTwo === "platform" ? "bg-[0px_-481px]" : "bg-[0px_-498px]"}`}></span>
                                <span className={`capitalize text-sm flex-1 ${selectedChartTwo === "platform" ? "text-blue-700 font-bold" : ""} font-robotoSans`}>Platform</span>
                            </div>
                        </div>
                        {selectedChartTwo === "demographic" &&
                            <>
                                <div className="flex items-center justify-between my-4">
                                    <h3 className="text-[16px] font-bold font-robotoSans">Age and gender distribution</h3>
                                    <div className="flex items-center">
                                        <div className="inline-flex items-center h-9 px-3 bg-gray-100 font-robotoSans rounded min-w-[150px] relative">
                                            <span className="text-sm font-light">All</span>
                                            <span className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 bg-no-repeat inline-flex bg-[length:33px_398px] bg-[0px_-381px] bg-iconImg2 translate-x-1.5"></span>
                                        </div>
                                        <div className="inline-flex items-center h-9 px-3 bg-gray-100 font-robotoSans rounded min-w-[150px] ml-2 relative">
                                            <span className="text-sm font-light">Results</span>
                                            <span className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 bg-no-repeat inline-flex bg-[length:33px_398px] bg-[0px_-381px] bg-iconImg2 translate-x-1.5"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full h-[260px]">
                                    <Bar options={BarOptions} data={demoGraphicData} />
                                </div>
                            </>
                        }
                        {selectedChartTwo === "platform" &&
                            <>
                                <div className="flex items-start justify-end flex-wrap">
                                    <div className="flex-1 pr-3 border-r border-solid border-gray-200">
                                        <div className="flex items-center justify-between my-4">
                                            <h3 className="text-[18px] font-bold font-robotoSans">Placement per platform</h3>
                                            <div className="flex items-center">
                                                <div className="inline-flex items-center h-9 px-3 bg-gray-100 font-robotoSans rounded min-w-[150px] relative">
                                                    <span className="inline-flex w-4 h-4 bg-[#5c3bbf] rounded-sm mr-2"></span>
                                                    <span className="text-sm font-light">Reach</span>
                                                    <span className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 bg-no-repeat inline-flex bg-[length:33px_398px] bg-[0px_-381px] bg-iconImg2 translate-x-1.5"></span>
                                                </div>
                                                <div className="inline-flex items-center h-9 px-3 bg-gray-100 font-robotoSans rounded min-w-[150px] ml-2 relative">
                                                    <span className="inline-flex w-4 h-4 bg-[#32cdcd] rounded-sm mr-2"></span>
                                                    <span className="text-sm font-light">Results</span>
                                                    <span className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 bg-no-repeat inline-flex bg-[length:33px_398px] bg-[0px_-381px] bg-iconImg2 translate-x-1.5"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full h-[350px]">
                                            <Bar options={options} data={platformData} />
                                        </div>
                                        <p className="text-[12px] font-light font-robotoSans mb-4 mt-5">* You may see low delivery of ads to the Facebook Stories placement until it's available to everyone who uses Facebook Stories. A more accurate metric is cost per result.</p>
                                    </div>
                                    <div className="w-[200px] px-3 flex flex-col pt-5">
                                        <h5 className="text-[14px] font-bold font-robotoSans mb-2">Device type</h5>
                                        <h5 className="text-[14px] font-bold font-robotoSans mb-1">Mobile and desktop</h5>
                                        <div className="inline-flex items-center h-9 px-3 bg-gray-100 font-robotoSans rounded min-w-[150px] relative">
                                            <span className="text-sm font-normal">Mobile and desktop</span>
                                            <span className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 bg-no-repeat inline-flex bg-[length:33px_398px] bg-[0px_-381px] bg-iconImg2 translate-x-1.5"></span>
                                        </div>
                                        <h6 className="text-[12px] font-bold font-robotoSans mb-2 mt-4">About placement results</h6>
                                        <p className="text-[12px] font-normal font-robotoSans mb-2">Ad delivery is optimized to allocate your budget to placements likely to perform best with your audience, based on your targeting and bid amount.</p>
                                        <a href="#" className="text-[14px] font-normal font-robotoSans mt-4 text-blue-600">Learn more</a>
                                    </div>
                                    <div className="w-full pt-4 border-t border-solid border-gray-200">
                                        <h6 className="text-[14px] font-bold font-robotoSans mb-2">See where your ads appeared</h6>
                                        <p className="text-[14px] font-normal font-robotoSans mb-2">Download a list of places where your ads appeared in the last 30 days. Data is only available if the Campaigns or Ad sets you selected were delivered to Audience Network, Facebook in-stream videos, Instagram profile feed, Ads on Facebook Reels, or Ads on Instagram Reels. Recent data may be delayed by a few days. Learn more</p>
                                        <div className="pl-3 pr-4 h-9 inline-flex items-center justify-center bg-[#0000000d] rounded-md cursor-pointer mr-2">
                                            <span className="w-4 h-4 bg-no-repeat inline-flex bg-[length:601px_8736px] bg-[-476px_-3972px] bg-iconImg9"></span>
                                            <span className="text-gray-700 ml-2 text-sm font-normal font-robotoSans">Download reports</span>
                                        </div>
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                    <div className="bg-white rounded-md mb-2 drop-shadow-lg" id="add-preview">
                        <div className="flex items-center justify-between py-2 px-4">
                            <h3 className="text-[18px] font-bold font-robotoSans">Ad preview & comments . 17 placements</h3>
                            <div className="flex items-center">
                                <div className="pl-3 pr-4 h-9 inline-flex items-center justify-center bg-[#0000000d] rounded-md cursor-pointer mr-2">
                                    <span className="w-4 h-4 bg-no-repeat inline-flex bg-[length:251px_284px] bg-[-134px_-251px] bg-iconImg10"></span>
                                    <span className="text-gray-700 ml-2 text-sm font-normal font-robotoSans">Advanced preview</span>
                                </div>
                                <div className="pl-3 pr-4 h-9 inline-flex items-center justify-center bg-[#0000000d] rounded-md cursor-pointer">
                                    <span className="text-gray-700 ml-2 text-sm font-normal font-robotoSans">Share</span>
                                    <span className="w-4 h-4 bg-no-repeat inline-flex bg-[length:33px_398px] bg-[0px_-381px] bg-iconImg2 ml-2"></span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start justify-between bg-gray-100 h-[620px] relative rounded-lg">
                            <div className="flex-1 flex justify-center">
                                <div className="w-[250px] h-auto pt-3">
                                    <img src={`${domainUrl}${selectedItem?.image?.image_1}`} alt="Img" />
                                </div>
                            </div>
                            <div className="flex flex-col px-4 w-[250px] bg-transparent h-full">
                                <div className="group pb-2 text-center mt-[100px]">
                                    <span className="w-8 h-8 bg-no-repeat inline-flex bg-[length:251px_284px] bg-[0px_-251px] bg-iconImg10"></span>
                                    <h6 className="text-[16px] font-bold pt-2 font-robotoSans">Comments not supported</h6>
                                    <p className="text-[14px] font-normal font-robotoSans text-gray-500">Comment previews are not supported for dynamic ads.</p>
                                </div>
                            </div>
                            <div className="flex flex-col px-3 w-[230px] bg-white overflow-y-auto h-full">
                                <div className="group pb-4">
                                    <h6 className="text-[14px] font-bold py-2 font-robotoSans">Feeds</h6>
                                    <div className="relative">
                                    <img src={`${domainUrl}${selectedItem?.image?.image_2}`} alt="Img" />
                                    </div>
                                </div>
                                <div className="group pb-2 border-t bprder-solid border-gray-200 pt-1">
                                    <h6 className="text-[14px] font-bold py-2 font-robotoSans">Stories and Reels</h6>
                                    <div className="relative">
                                        <img src={`${domainUrl}${selectedItem?.image?.image_3}`} alt="Img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex items-center justify-start py-2 px-2">
                            <span className="text-[12px] font-normal font-robotoSans">The style, formatting, media resolution and layout of your ad's media, call to action or text may be adjusted when it's likely to improve performance. </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChartDetails;