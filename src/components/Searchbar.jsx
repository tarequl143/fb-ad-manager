import React, { useState } from "react";
import {MagnifyingGlass} from "phosphor-react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Searchbar = ({updateSearch, searchValue, updateDataRange, dateRange}) => {
    const [showCalender, setShowCalender] = useState(false);
    return (
        <div className="w-full bg-transparent flex items-center justify-between mb-2 relative z-[100]">
            <div className="flex items-center flex-1 bg-white relative pl-11 pr-3 shadow-[0_0_5px_0_rgba(0,0,0,0.1)] h-9 rounded-lg">
                <span className="absolute z-10 w-4 left-3 top-1/2 -translate-y-1/2"><MagnifyingGlass size={16} weight="regular" /></span>
                <input type="search" value={searchValue || ""} onChange={(e) => updateSearch(e?.target?.value)} placeholder="Search and filter" className="h-full flex-1 !outline-none font-robotoSans text-sm font-normal" />
            </div>
            <div className="flex items-center relative">
                <div className="z-10 ml-1 w-[292px] h-9 flex items-center justify-between bg-[#0000000d] hover:bg-gray-300 px-4 rounded-md" onClick={() => setShowCalender(!showCalender)}>
                    <span className="text-sm text-[#1c1e21] font-robotoSans flex-1">This month: Sep 1, 2023 – Sep 4, 2023</span>
                    <span className="w-4 h-4 bg-no-repeat inline-flex bg-[length:33px_398px] bg-[0px_-381px] bg-iconImg2 translate-x-1.5"></span>
                </div>
                {showCalender &&
                    <div className="absolute right-0 top-full z-50 bg-white adm-calender">
                        <Calendar onChange={updateDataRange} value={dateRange}
                            showDoubleView
                            selectRange
                            className="react-calendar-v2"
                            allowPartialRange
                            showNeighboringMonth={false}
                        />
                    </div>
                }
            </div>
        </div>
    )
}

export default Searchbar;